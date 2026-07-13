import React from 'react';

interface ScrollProgressProps {
  progress: number;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ progress }) => {
  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
