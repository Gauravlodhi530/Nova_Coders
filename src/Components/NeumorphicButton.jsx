import React from "react";

export default function NeumorphicButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const baseClasses = `
    px-8 py-4 rounded-2xl font-semibold text-lg
    transition-all duration-300 cursor-pointer
    active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  const primaryClasses = `
    ${baseClasses}
    bg-gradient-to-br from-blue-400 to-purple-500
    text-white shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
    hover:shadow-[12px_12px_20px_#bebebe,-12px_-12px_20px_#ffffff]
    hover:from-blue-500 hover:to-purple-600
  `;

  const secondaryClasses = `
    ${baseClasses}
    bg-gradient-to-br from-gray-50 to-gray-100
    text-gray-700 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
    hover:shadow-[12px_12px_20px_#bebebe,-12px_-12px_20px_#ffffff]
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={variant === "primary" ? primaryClasses : secondaryClasses}
      {...props}
    >
      {children}
    </button>
  );
}
