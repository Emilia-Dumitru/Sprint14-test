import "./TaskContainer.css";
import TaskCard from "../task-card/TaskCard.js";

function TaskContainer(props) {
    return (
        <div className="task-container">
            {props.data.map((task, index) => (
                <TaskCard
                    key={task.id}
                    id={task.id}
                    status={task.status}
                    name={task.name}
                    dueDate={task.dueDate}
                />
            ))}
        </div>
    );
}
export default TaskContainer;