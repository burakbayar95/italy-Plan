import React from 'react';

interface ProgressBarProps {
  total: number;
  completed: number;
  colorClass: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, completed, colorClass }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-semibold text-gray-600">İlerleme</span>
        <span className="text-sm font-bold text-gray-800">
          %{percentage} <span className="text-xs font-normal text-gray-500">({completed}/{total})</span>
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-2.5 rounded-full transition-all duration-500 ease-out ${colorClass}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;