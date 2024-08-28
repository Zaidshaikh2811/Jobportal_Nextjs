import React from 'react';

const FormField = ({ id, label, type = 'text', value, onChange, placeholder, options }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
            {label}
        </label>
        {type === 'select' ? (
            <select
                id={id}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                id={id}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        )}
    </div>
);

export default FormField;
