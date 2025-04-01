import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  fullWidth = false,
  loading = false
}) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    font-medium rounded-lg
    shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-200 ease-in-out
  `;

  const variantClasses = {
    primary: `
      bg-primary-600 hover:bg-primary-700 
      dark:bg-primary-500 dark:hover:bg-primary-600
      text-white 
      focus:ring-primary-500
      shadow-primary-500/25 hover:shadow-primary-500/40
    `,
    secondary: `
      bg-white hover:bg-gray-50 
      dark:bg-gray-800 dark:hover:bg-gray-700
      text-gray-700 dark:text-gray-200
      border border-gray-300 dark:border-gray-600
      focus:ring-gray-500
      shadow-gray-500/10 hover:shadow-gray-500/20
    `,
    danger: `
      bg-red-600 hover:bg-red-700 
      dark:bg-red-500 dark:hover:bg-red-600
      text-white 
      focus:ring-red-500
      shadow-red-500/25 hover:shadow-red-500/40
    `,
    success: `
      bg-green-600 hover:bg-green-700 
      dark:bg-green-500 dark:hover:bg-green-600
      text-white 
      focus:ring-green-500
      shadow-green-500/25 hover:shadow-green-500/40
    `,
    outline: `
      bg-transparent
      border border-gray-300 dark:border-gray-600
      text-gray-700 dark:text-gray-200
      hover:bg-gray-50 dark:hover:bg-gray-700
      focus:ring-gray-500
    `
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
      `}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;