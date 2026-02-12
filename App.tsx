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

const STORAGE_KEY = 'italy-trip-planner-v1';

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activeCity, setActiveCity] = useState<City>(City.VENICE);
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
            delay: 250, // Slight delay for touch dragging to prevent scrolling interference
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

  const themeColor = activeCity === City.VENICE ? 'bg-cyan-600' : 'bg-orange-600';
  const progressColor = activeCity === City.VENICE ? 'bg-cyan-500' : 'bg-orange-500';
  const tabActive = activeCity === City.VENICE ? 'text-cyan-600 border-cyan-600 bg-cyan-50' : 'text-orange-600 border-orange-600 bg-orange-50';

  if (isLoading) return <div className="flex items-center justify-center h-screen">Yükleniyor...</div>;

  return (
    <div className="min-h-screen pb-10">
        
      {/* Header */}
      <header className={`${themeColor} text-white pt-8 pb-12 px-6 shadow-lg rounded-b-[2.5rem] relative overflow-hidden transition-colors duration-500`}>
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <MapPin size={120} />
        </div>
        <div className="relative z-10 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-1">İtalya Rotası</h1>
            <p className="text-white/80 text-sm">Keyifli gezmeler!</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 -mt-8 relative z-20">
        
        {/* City Tabs */}
        <div className="bg-white p-1.5 rounded-2xl shadow-md flex mb-6">
            <button
                onClick={() => setActiveCity(City.VENICE)}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                    activeCity === City.VENICE 
                    ? 'bg-cyan-50 text-cyan-700 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                Venedik (Pazar)
            </button>
            <button
                onClick={() => setActiveCity(City.FLORENCE)}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                    activeCity === City.FLORENCE 
                    ? 'bg-orange-50 text-orange-700 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                Floransa (21 Şubat)
            </button>
        </div>

        {/* Content Area */}
        <div className="">
            <ProgressBar 
                total={totalCount} 
                completed={completedCount} 
                colorClass={progressColor}
            />

            <div className="flex justify-between items-center mb-4 px-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                   {activeCity} Planı
                </span>
                <button 
                    onClick={resetProgress}
                    className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                >
                    <RotateCcw size={12} />
                    Sıfırla
                </button>
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
                <div className="text-center py-10 text-gray-400">
                    Plan bulunamadı.
                </div>
            )}
            
            {/* Completion Message */}
            {completedCount === totalCount && totalCount > 0 && (
                <div className="mt-8 p-6 bg-green-100 rounded-2xl text-center animate-bounce shadow-sm">
                    <span className="text-4xl mb-2 block">🎉</span>
                    <h3 className="text-green-800 font-bold text-lg">Harika!</h3>
                    <p className="text-green-700 text-sm">Bugünkü tüm planı tamamladın.</p>
                </div>
            )}
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-400 text-xs pb-6">
        <p>Otomatik kaydediliyor <Save size={10} className="inline ml-1" /></p>
      </footer>
    </div>
  );
};

export default App;