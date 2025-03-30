import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, icon, fullWidth = false, className = '', children, ...props }, ref) => {
    return (
      <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          <select
            ref={ref}
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
              ${className}
            `}
            {...props}
          >
            {children}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDownIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;