import React from 'react';

export default function NeumorphicCard({ children, className = "", ...props }) {
  return (
    <div 
      className={`
        bg-gradient-to-br from-gray-50 to-gray-100
        rounded-3xl p-6
        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
        hover:shadow-[25px_25px_70px_#bebebe,-25px_-25px_70px_#ffffff]
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}