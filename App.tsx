import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  TouchSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { MapPin, RotateCcw, Save } from 'lucide-react';

import { Activity, City } from './types';
import { INITIAL_DATA } from './constants';
import ActivityCard from './components/ActivityCard';
import ProgressBar from './components/ProgressBar';

const STORAGE_KEY = 'italy-trip-planner-v3';

const CITY_THEME = {
  [City.BOLOGNA_1]: { 
      bg: 'bg-red-600', 
      progress: 'bg-red-500', 
      light: 'bg-red-50', 
      text: 'text-red-700', 
      label: 'Bologna (19 Şub)',
      shortLabel: 'BOL 1',
      img: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&w=2564&auto=format&fit=crop'
  },
  [City.BOLOGNA_2]: { 
      bg: 'bg-red-500', 
      progress: 'bg-red-400', 
      light: 'bg-red-50', 
      text: 'text-red-600', 
      label: 'Bologna (20 Şub)',
      shortLabel: 'BOL 2',
      img: 'https://images.unsplash.com/photo-1520190282873-dfe1246342c5?q=80&w=2670&auto=format&fit=crop' 
  },
  [City.FLORENCE]: { 
      bg: 'bg-amber-600', 
      progress: 'bg-amber-500', 
      light: 'bg-amber-50', 
      text: 'text-amber-700', 
      label: 'Floransa (21 Şub)',
      shortLabel: 'Floransa',
      img: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=2574&auto=format&fit=crop'
  },
  [City.VENICE]: { 
      bg: 'bg-cyan-600', 
      progress: 'bg-cyan-500', 
      light: 'bg-cyan-50', 
      text: 'text-cyan-700', 
      label: 'Venedik (22 Şub)',
      shortLabel: 'Venedik',
      img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2566&auto=format&fit=crop'
  },
  [City.VERONA]: { 
      bg: 'bg-lime-600', 
      progress: 'bg-lime-500', 
      light: 'bg-lime-50', 
      text: 'text-lime-700', 
      label: 'Verona (23 Şub)',
      shortLabel: 'Verona',
      img: 'https://images.unsplash.com/photo-1518179299440-690226c8b4b7?q=80&w=2574&auto=format&fit=crop'
  },
  [City.MILAN_1]: { 
      bg: 'bg-indigo-600', 
      progress: 'bg-indigo-500', 
      light: 'bg-indigo-50', 
      text: 'text-indigo-700', 
      label: 'Milano (24 Şub)',
      shortLabel: 'MIL 1',
      img: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=2574&auto=format&fit=crop'
  },
  [City.MILAN_2]: { 
      bg: 'bg-indigo-500', 
      progress: 'bg-indigo-400', 
      light: 'bg-indigo-50', 
      text: 'text-indigo-600', 
      label: 'Milano (25 Şub)',
      shortLabel: 'MIL 2',
      img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2670&auto=format&fit=crop'
  },
  [City.MILAN_3]: { 
      bg: 'bg-indigo-400', 
      progress: 'bg-indigo-300', 
      light: 'bg-indigo-50', 
      text: 'text-indigo-500', 
      label: 'Milano (26 Şub)',
      shortLabel: 'MIL 3',
      img: 'https://images.unsplash.com/photo-1533663004383-77d33d7b8813?q=80&w=2574&auto=format&fit=crop'
  }
};

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activeCity, setActiveCity] = useState<City>(City.BOLOGNA_1);
  const [isLoading, setIsLoading] = useState(true);

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setActivities(parsed);
        } else {
          setActivities(INITIAL_DATA);
        }
      } catch (e) {
        console.error("Failed to parse local storage", e);
        setActivities(INITIAL_DATA);
      }
    } else {
      setActivities(INITIAL_DATA);
    }
    setIsLoading(false);
  }, []);

  // Save to LocalStorage whenever activities change
  useEffect(() => {
    if (!isLoading && activities.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
    }
  }, [activities, isLoading]);

  // Drag & Drop Sensors (Optimized for mobile)
  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: {
            distance: 5, // Prevent accidental drags
        }
    }),
    useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250, // Slight delay for touch dragging
            tolerance: 5,
        },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setActivities((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const toggleActivity = (id: string) => {
    setActivities((prev) =>
      prev.map((act) =>
        act.id === id ? { ...act, isCompleted: !act.isCompleted } : act
      )
    );
  };

  const resetProgress = () => {
    if (confirm('Tüm işaretlemeleri ve sıralamayı sıfırlamak istediğine emin misin?')) {
        setActivities(INITIAL_DATA);
        localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Filter activities for current view
  const currentActivities = activities.filter((a) => a.city === activeCity);
  const totalCount = currentActivities.length;
  const completedCount = currentActivities.filter((a) => a.isCompleted).length;

  const theme = CITY_THEME[activeCity] || CITY_THEME[City.BOLOGNA_1];

  if (isLoading) return <div className="flex items-center justify-center h-screen">Yükleniyor...</div>;

  return (
    <div className="min-h-screen pb-10 relative">
      
      {/* Background Image Layer - Preloaded and Crossfaded */}
      {(Object.values(City) as City[]).map((city) => (
          <div
            key={city}
            className={`fixed inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                activeCity === city ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
                backgroundImage: `url(${CITY_THEME[city].img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
          />
      ))}
      
      {/* Dark Overlay for Readability */}
      <div className="fixed inset-0 z-0 bg-black/40 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Header - Minimalist Transparent */}
        <header className="pt-8 pb-6 px-6 text-center text-white">
            <h1 className="text-3xl font-bold mb-1 drop-shadow-md">İtalya Turu 2026</h1>
            <p className="text-white/90 text-sm font-medium drop-shadow-sm">19 - 26 Şubat</p>
        </header>

        <main className="max-w-lg mx-auto px-4">
            
            {/* City Tabs - Grid Layout (Wrapped) */}
            <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl mb-6">
                <div className="grid grid-cols-4 gap-2">
                    {(Object.values(City) as City[]).map((city) => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            className={`px-1 py-2 text-xs font-bold rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                                activeCity === city 
                                ? `${CITY_THEME[city].light} ${CITY_THEME[city].text} ring-1 ring-inset ring-opacity-50 scale-105` 
                                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100/50'
                            }`}
                        >
                            <span className="truncate w-full text-center text-[10px] sm:text-xs">
                                {CITY_THEME[city].shortLabel}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="">
                
                {/* Progress Bar Container with Glassmorphism */}
                <div className="bg-white/95 rounded-2xl p-4 shadow-lg mb-4">
                    <ProgressBar 
                        total={totalCount} 
                        completed={completedCount} 
                        colorClass={theme.progress}
                    />
                    
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {theme.label}
                        </span>
                        <button 
                            onClick={resetProgress}
                            className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                        >
                            <RotateCcw size={12} />
                            Sıfırla
                        </button>
                    </div>
                </div>

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={currentActivities.map(a => a.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="space-y-3">
                            {currentActivities.map((activity) => (
                                <ActivityCard
                                    key={activity.id}
                                    activity={activity}
                                    onToggle={toggleActivity}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>

                {currentActivities.length === 0 && (
                    <div className="text-center py-10 text-white/80 font-medium">
                        Bu şehir için plan bulunamadı.
                    </div>
                )}
                
                {/* Completion Message */}
                {completedCount === totalCount && totalCount > 0 && (
                    <div className="mt-8 p-6 bg-white/95 backdrop-blur rounded-2xl text-center animate-bounce shadow-xl">
                        <span className="text-4xl mb-2 block">🎉</span>
                        <h3 className="text-green-800 font-bold text-lg">Harika!</h3>
                        <p className="text-green-700 text-sm">Bu bölümdeki tüm planı tamamladın.</p>
                    </div>
                )}
            </div>
        </main>

        <footer className="mt-12 text-center text-white/50 text-xs pb-6">
            <p>Otomatik kaydediliyor <Save size={10} className="inline ml-1" /></p>
        </footer>
      </div>
    </div>
  );
};

export default App;
