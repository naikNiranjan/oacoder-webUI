
import React from 'react';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'convex' | 'concave';
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = '',
  variant = 'convex',
}) => {
  const baseStyle = 'bg-[#e0e0e0] rounded-2xl transition-shadow duration-300';
  
  const shadowStyle = {
    convex: 'shadow-[9px_9px_16px_#bebebe,_-9px_-9px_16px_#ffffff]',
    concave: 'shadow-[inset_9px_9px_16px_#bebebe,_inset_-9px_-9px_16px_#ffffff]',
  };

  return (
    <div className={`${baseStyle} ${shadowStyle[variant]} ${className}`}>
      {children}
    </div>
  );
};
