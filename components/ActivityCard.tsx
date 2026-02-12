import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Check } from 'lucide-react';
import { ActivityProps, TagType } from '../types';
import { getTagColor, getTagIcon } from '../constants';

const ActivityCard: React.FC<ActivityProps> = ({ activity, onToggle }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: activity.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative flex items-stretch bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-3 transition-all ${
        activity.isCompleted ? 'bg-gray-50' : ''
      }`}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="w-10 bg-gray-50 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none border-r border-gray-100"
      >
        <GripVertical size={18} className="text-gray-400" />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {activity.time}
              </span>
              {activity.price && (
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium">
                  {activity.price}
                </span>
              )}
            </div>
            
            <h3 className={`font-bold text-gray-800 leading-tight mb-1 ${activity.isCompleted ? 'line-through text-gray-400' : ''}`}>
              {activity.title}
            </h3>
            
            <p className={`text-sm text-gray-600 mb-3 leading-relaxed ${activity.isCompleted ? 'line-through text-gray-300' : ''}`}>
              {activity.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {activity.tags.map((tag) => (
                <span 
                  key={tag} 
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${getTagColor(tag)}`}
                >
                  {getTagIcon(tag)}
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Checkbox */}
          <button
            onClick={() => onToggle(activity.id)}
            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              activity.isCompleted
                ? 'bg-green-500 border-green-500 text-white shadow-sm'
                : 'border-gray-300 text-transparent hover:border-gray-400'
            }`}
          >
            <Check size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;