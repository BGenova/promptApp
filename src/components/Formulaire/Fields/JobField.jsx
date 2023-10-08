import React, { useState } from 'react';

/**
 * Job selection field with tooltip.
 * @param {Object} props - Component props.
 * @param {string} props.value - The selected value.
 * @param {Function} props.onChange - The function to handle selection change.
 * @param {Object[]} props.options - The selection options.
 */
function JobField({ value, onChange, options }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div>
            <label>
                Select a job:
                <select
                    value={value}
                    onChange={onChange}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <option value="">Select a job</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            {showTooltip && value && (
                <div className="tooltip">
                    Description: {options.find((job) => job.value === value).description}
                </div>
            )}
        </div>
    );
}

export default JobField;
