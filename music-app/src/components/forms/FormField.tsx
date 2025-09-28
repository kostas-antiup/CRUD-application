import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: 'text' | 'number' | 'textarea' | 'select' | 'datetime-local' | 'checkbox';
  name: string;
  value: string | boolean;
  options?: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, name, value, options, onChange, required = true }) => {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value as string}
          onChange={onChange}
          className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          rows={4}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value as string}
          onChange={onChange}
          className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required={required}
        >
          <option value="">Select a genre</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'checkbox' ? (
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={value as boolean}
          onChange={onChange}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value as string}
          onChange={onChange}
          className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;