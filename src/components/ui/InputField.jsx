import React, { useState } from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  validation = {},
  error,
  className = "",
  showPasswordToggle = false,
  icon: Icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (type === "password" && showPasswordToggle) {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className={`space-y-2 ${className}`}>
      
      
      <div className="relative">
        <input
          type={getInputType()}
          placeholder={placeholder}
          {...(register ? register(name, validation) : {})}
          className={`py-2 px-2 w-full bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-200 focus:outline-none focus:border-[#60a5fa] transition-all duration-300 rounded-xl ${
        
            error ? "border-red-500 focus:ring-red-500" : ""
          }`}
          {...props}
        />
        {Icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={18} />
          </div>
        )}
        
        {showPasswordToggle && type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-400 mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
