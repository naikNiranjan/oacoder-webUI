
import React from 'react';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  const baseStyle =
    'flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all duration-150 ease-in-out select-none';
  const textStyle = 'font-semibold text-gray-700';
  const shadowStyle = 'shadow-[5px_5px_10px_#bebebe,_-5px_-5px_10px_#ffffff]';
  const activeStyle = 'active:shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff]';
  const hoverStyle = 'hover:text-blue-600';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${shadowStyle} ${activeStyle} ${textStyle} ${hoverStyle} ${className}`}
    >
      {children}
    </button>
  );
};
