import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  icon?: LucideIcon;
  error?: string;
  required?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, icon: Icon, error, required, className = '', ...props }, ref) => {
    return (
      <div className="form-group">
        <label htmlFor={props.id} className={`form-label ${required ? 'required' : ''}`}>
          {label}
        </label>
        <div className={`relative ${error ? 'error' : ''}`}>
          {Icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          )}
          <select
            ref={ref}
            className={`input ${Icon ? 'pl-10' : ''} ${error ? 'error' : ''} ${className}
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-600 
              text-gray-900 dark:text-white
              focus:ring-primary-500 dark:focus:ring-primary-500
              focus:border-primary-500 dark:focus:border-primary-500`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="form-error">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select; 