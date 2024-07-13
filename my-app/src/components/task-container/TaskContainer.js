import "./TaskContainer.css";
import TaskCard from "../task-card/TaskCard.js";
import { useState } from "react";

function TaskContainer({ data, deleteTask, markAsFocus, markAsUnfocus }) {
    const [focusTaskId, setFocusTaskId] = useState(null);

    const setUnfocus = () => {
        setFocusTaskId(null);
        markAsUnfocus();
    };

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId);
    };

    return (
        <div>
            <div className="task-container">
                {data.map((task) => (
                    <TaskCard
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        status={task.status}
                        dueDate={task.dueDate}
                        isFocused={focusTaskId === task.id}
                        markAsFocus={() => {
                            setFocusTaskId(task.id);
                            markAsFocus(task.id);
                        }}
                        markAsUnfocus={setUnfocus}
                        deleteTask={() => handleDeleteTask(task.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskContainer;
