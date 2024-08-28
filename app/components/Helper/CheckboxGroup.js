// CheckboxGroup.jsx
import React from 'react';

const CheckboxGroup = ({ options, selectedOptions, onChange }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            onChange([...selectedOptions, value]);
        } else {
            onChange(selectedOptions.filter(option => option !== value));
        }
    };

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Type</label>
            {options.map((option) => (
                <div key={option} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor={option} className="text-gray-700 text-sm">{option}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup;
