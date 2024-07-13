import React, { useState } from "react";
import CreateTaskForm from "./TaskForm";
import "./ButtonCreateTask.css";


const CreateTaskButton = ({ addTask }) => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div className="btn-app">
        <button className="open-form-button" onClick={handleButtonClick}>
            Create Task
        </button>
        {showForm && <CreateTaskForm addTask={addTask} closeForm={closeForm} />}
    </div>
    );
}

export default CreateTaskButton;