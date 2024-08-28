import React from 'react';
import { IoTrashBin, IoMdAdd } from 'react-icons/io';

const ArrayInput = ({ items, onItemChange, onItemAdd, onItemRemove, placeholder }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{placeholder}</label>
        {items.map((item, index) => (
            <div key={index} className="flex mb-2">
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    value={item}
                    onChange={onItemChange(index)}
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={() => onItemRemove(index)}
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    <IoTrashBin />
                </button>
            </div>
        ))}
        <button
            type="button"
            onClick={onItemAdd}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
            <IoMdAdd />
        </button>
    </div>
);

export default ArrayInput;
