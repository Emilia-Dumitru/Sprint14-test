import React, { useState } from "react";
import './TaskForm.css';

const CreateTaskForm = ({ addTask, closeForm }) => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskDetails, setTaskDetails] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: `T-${Date.now()}`,
            name: taskName,
            dueDate: new Date(dueDate),
            details: taskDetails,
            status: "Todo"
        };
        addTask(newTask);
        closeForm();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={closeForm}>&times;</span>
                <h2>Create task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label className="label-md">Task Name</label>
                        <input
                            className="input-primary"
                            type="text"
                            required
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                        <span className="error-message">This field is Required!</span>
                    </div>
                    <div className="form-row">
                        <label className="label-md">Due Date</label>
                        <input
                            className="input-primary"
                            type="date"
                            required
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                        <span className="error-message">This field is Required!</span>
                    </div>
                    <div className="form-row">
                        <label className="label-md">Task Details</label>
                        <textarea
                            className="input-primary"
                            cols={30}
                            rows={10}
                            required
                            value={taskDetails}
                            onChange={(e) => setTaskDetails(e.target.value)}
                        ></textarea>
                        <span className="error-message">This field is Required!</span>
                    </div>
                    <button className='button-primary' type="submit">Create Task</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTaskForm;
