import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
    const { id, name, status, dueDate, isFocused, markAsFocus, markAsUnfocus, deleteTask } = props;

    return (
        <div className={`card-wrapper ${isFocused ? "focused" : "unfocused"}`} onMouseEnter={markAsFocus} onMouseLeave={markAsUnfocus}>
            <div className="card-header">
                <p className="task-id">{id}</p>
                <Badge status={status} />
            </div>
            <div className="card-content">
                <p>{name}</p>
            </div>
            <div className="card-footer">
                <DateContainer date={dueDate} />
            </div>
            {isFocused && (
                <button className="delete-button" onClick={deleteTask}>
                    Delete
                </button>
            )}
        </div>
    );
}

export default TaskCard;