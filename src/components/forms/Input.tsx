import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, error, required, className = '', ...props }, ref) => {
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
          <input
            ref={ref}
            className={`input ${Icon ? 'pl-10' : ''} ${error ? 'error' : ''} ${className}
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-600 
              text-gray-900 dark:text-white
              focus:ring-primary-500 dark:focus:ring-primary-500
              focus:border-primary-500 dark:focus:border-primary-500`}
            {...props}
          />
        </div>
        {error && <p className="form-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 