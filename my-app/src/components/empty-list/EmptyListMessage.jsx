import React from "react";
import tasksIcon from "../../assets/tasks-icon.png";
import "./EmptyListMessage.css";

const EmptyListMessage = () => {
    return (
        <div className="empty-list-container">
            <div className="empty-list-message">
                <img className="tasks-logo" src={tasksIcon} alt="icon" />
                <h3 className="view-title">No Tasks Yet</h3>
                <p className="subtitle">Get productive. Create a Task Now.</p>
            </div>
        </div>
    );
};

export default EmptyListMessage;