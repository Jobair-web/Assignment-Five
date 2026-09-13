import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "brand-gradient text-white hover:opacity-90 shadow-md hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    text: "text-gray-600 hover:text-gray-900",
    dangerOutline: "w-full py-2.5 rounded-xl border border-rose-300 text-rose-600 hover:bg-rose-50 font-medium transition-colors"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;