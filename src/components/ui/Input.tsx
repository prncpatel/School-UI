import React from 'react';
interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
}
const Input = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  error,
  className = ''
}: InputProps) => {
  return <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1">
        <input type={type} name={id} id={id} value={value} onChange={onChange} placeholder={placeholder} required={required} className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border ${error ? 'border-red-500' : ''}`} />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>;
};
export default Input;