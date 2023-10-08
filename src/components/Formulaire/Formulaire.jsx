import React, {useRef, useState} from 'react';
import metiers from "../../data/dataMetier";
import JobField from "./Fields/JobField";
import ObjectiveField from "./Fields/ObjectiveField";

/**
 * Main component of the form.
 */
function Form() {
    const [jobSelected, setJobSelected] = useState('');
    const [jobSelectedObjectiveArray, setJobSelectedObjectiveArray] = useState([]);
    const [objectiveSelected, setObjectiveSelected] = useState("");
    const [prompt, setPrompt] = useState('Select a profession');
    const pRef = useRef(null);


    const getJobObjectives = (e) => {
        const selectedJob = metiers.find((job) => job.value === e.target.value);
        setJobSelectedObjectiveArray(selectedJob.objectif);
    };

    const handleSelectJobChange = (e) => {
        setJobSelected(e.target.value);
        getJobObjectives(e);
    };

    const handleSelectionChange = (e) => {
        setObjectiveSelected(e.target.value);
    };

    const copyPromptToClipboard = () => {
        if (pRef.current) {
            const textToCopy = pRef.current.textContent;
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    };

    /**
     * Handle form submission.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedValue = jobSelected;
        const selectedJob = metiers.find((job) => job.value === selectedValue);

        const message = `Behave like a ${selectedJob.label}. Your objective is: ${objectiveSelected}`;
        setPrompt(message);
    };

    return (
        <div>
            <h2>Form with Selectable Fields</h2>
            <form onSubmit={handleSubmit}>
                <JobField value={jobSelected} onChange={handleSelectJobChange} options={metiers} />
                <ObjectiveField value={objectiveSelected} onChange={handleSelectionChange} options={jobSelectedObjectiveArray} />

                <br />
                <button type="submit">Submit</button>
                <br />
                <code ref={pRef} onClick={copyPromptToClipboard} style={{ cursor: 'pointer' }}>
                    {prompt}
                </code>
            </form>
        </div>
    );
}

export default Form;
