import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="mt-1 relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`
            block ${fullWidth ? 'w-full' : ''} 
            rounded-md border-gray-300 dark:border-gray-600
            ${icon ? 'pl-10' : 'pl-3'} pr-10 py-2
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
            focus:border-blue-500 dark:focus:border-blue-400
            disabled:bg-gray-50 dark:disabled:bg-gray-900
            disabled:text-gray-500 dark:disabled:text-gray-400
            disabled:border-gray-200 dark:disabled:border-gray-700
            text-sm
            transition-colors
            ${error ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'}
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

export default Input;