import React from 'react';

export default function NeumorphicSelect({ 
  label, 
  value, 
  onChange, 
  options = [],
  required = false,
  className = "",
  ...props 
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-gray-700 font-medium mb-2 ml-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full px-6 py-4 rounded-2xl
          bg-gradient-to-br from-gray-50 to-gray-100
          border-none outline-none
          shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
          focus:shadow-[inset_12px_12px_20px_#bebebe,inset_-12px_-12px_20px_#ffffff]
          transition-all duration-300
          text-gray-700
          appearance-none cursor-pointer
        "
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}