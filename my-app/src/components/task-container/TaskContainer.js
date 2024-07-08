import "./TaskContainer.css";
import TaskCard from "../task-card/TaskCard.js";
import { useState } from "react";

function TaskContainer(props) {
    function deleteTask(taskId) {
        console.log("Se va sterge task-ul " + taskId);
    }
    const [focusTaskId, setFocusTaskId] = useState(null);
    const setUnfocus = () => {
        setFocusTaskId(null);
    };

    return (
        <div>
            {
                focusTaskId ?
                    <div>Focused Task : {focusTaskId} </div>
                    : <div>Unfocused Task</div>
            }
            <div className="task-container">
                {props.data.map((task, index) => (
                    <TaskCard
                        isFocused={focusTaskId === task.id}
                        markAsUnfocus={setUnfocus}
                        markAsFocus={() => setFocusTaskId(task.id)}
                        deleteTask={deleteTask}
                        key={task.id}
                        id={task.id}
                        status={task.status}
                        name={task.name}
                        dueDate={task.dueDate}
                    />
                ))}
            </div>
        </div>
    );
}
export default TaskContainer;