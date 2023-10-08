import React from 'react';

/**
 * Objective selection field.
 * @param {Object} props - Component props.
 * @param {string} props.value - The selected value.
 * @param {Function} props.onChange - The function to handle selection change.
 * @param {string[]} props.options - The selection options for objectives.
 */
function ObjectiveField({ value, onChange, options }) {
    return (
        <div>
            <label>
                Select an objective:
                <select value={value} onChange={onChange}>
                    <option value="">Select an objective</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default ObjectiveField;
