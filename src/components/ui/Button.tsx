import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl disabled:bg-blue-300 hover:scale-105 transform",
    secondary: "bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl hover:scale-105 transform",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transform"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled ? 'cursor-not-allowed opacity-60' : '',
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}