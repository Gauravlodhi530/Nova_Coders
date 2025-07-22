import React from 'react';
import NeumorphicCard from './NeumorphicCard';

export default function TeamCard({ name, role, image, bio, social = {} }) {
  return (
    <NeumorphicCard className="text-center group hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden 
                      shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                      group-hover:shadow-[12px_12px_20px_#bebebe,-12px_-12px_20px_#ffffff]
                      transition-all duration-300">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-blue-600 font-semibold mb-3">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
      
      <div className="flex justify-center space-x-4">
        {social.linkedin && (
          <a 
            href={social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100
                       shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                       hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
                       flex items-center justify-center transition-all duration-300
                       text-blue-600 hover:text-blue-700"
          >
            <span className="text-sm font-bold">in</span>
          </a>
        )}
        {social.github && (
          <a 
            href={social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100
                       shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                       hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
                       flex items-center justify-center transition-all duration-300
                       text-gray-700 hover:text-gray-800"
          >
            <span className="text-sm font-bold">gh</span>
          </a>
        )}
      </div>
    </NeumorphicCard>
  );
}