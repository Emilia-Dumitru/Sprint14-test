import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
    
    function setUnfocused() {
        props.markAsUnfocus();
    }
    function setFocused() {
        props.markAsFocus();
    }
    const focusedClass = props.isFocused ? "focused" : "unfocused";
    return (
        <div className={"card-wrapper " + focusedClass} onMouseEnter={setFocused} onMouseLeave={setUnfocused}>


            <div className="card-header">
                <p className="task-id">{props.id}</p>
                <Badge status={props.status} />
                {
                    props.isFocused ?
                        <span className="delete-button" onClick={() => props.deleteTask(props.id)}>&times;</span>
                        : ""
                }
            </div>
            <div className="card-content">
                <p>{props.name}</p>
            </div>
            <div className="card-footer">
                <DateContainer date={props.dueDate} />
            </div>
        </div>
    );
}

export default TaskCard;