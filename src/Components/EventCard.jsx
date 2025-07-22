import React from 'react';
import NeumorphicCard from './NeumorphicCard';

export default function EventCard({ title, date, description, image, status = "upcoming" }) {
  return (
    <NeumorphicCard className="overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden
                      shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold
                         ${status === 'completed' 
                           ? 'bg-green-100 text-green-700' 
                           : 'bg-blue-100 text-blue-700'}`}>
          {status}
        </span>
      </div>
      
      <p className="text-blue-600 font-semibold mb-3">{date}</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </NeumorphicCard>
  );
}