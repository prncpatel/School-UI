import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, required, className = '', ...props }, ref) => {
    return (
      <div className="form-group">
        <label htmlFor={props.id} className={`form-label ${required ? 'required' : ''}`}>
          {label}
        </label>
        <div className={`relative ${error ? 'error' : ''}`}>
          <textarea
            ref={ref}
            className={`input !h-auto ${error ? 'error' : ''} ${className}
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

TextArea.displayName = 'TextArea';

export default TextArea; 