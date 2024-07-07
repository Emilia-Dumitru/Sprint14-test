// CreateTaskForm.js
import React from "react";
import './TaskForm.css';

const CreateTaskForm = ({ closeForm }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={closeForm}>&times;</span>
                <h2>Create task</h2>
                <form>
                    <div className="form-row">
                        <label className="label-md">Task Name</label>
                        <input className="input-primary" type="text" required />
                        <span className="error-message">This field is Required!</span>
                    </div>
                    <div className="form-row">
                        <label className="label-md">Due Date</label>
                        <input className="input-primary" type="date" required />
                        <span className="error-message">This field is Required!</span>
                    </div>
                    <div className="form-row">
                        <label className="label-md">Task Details</label>
                        <textarea className="input-primary" name="" id="" cols={30} rows={10} required></textarea>
                        <span className="error-message">This field is Required!</span>
                    </div>
                    <button className='button-primary' type="submit">Create Task</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTaskForm;
