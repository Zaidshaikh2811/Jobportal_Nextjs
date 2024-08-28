import React from 'react';

export default function CheckboxGroup({ options, selectedOptions, onChange }) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Type
            </label>
            {options.map((option) => (
                <div key={option}>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            id={option}
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={onChange}
                        />
                        <span className="ml-2">{option}</span>
                    </label>
                </div>
            ))}
        </div>
    );
}
