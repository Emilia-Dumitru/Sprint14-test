import "./TaskContainer.css";
import TaskCard from "../task-card/TaskCard.js";
import React, { useState } from "react";
import TaskFilter from "../task-filter/TaskFilter.jsx";
import EmptyListMessage from "../empty-list/EmptyListMessage.jsx";


function TaskContainer({ data, deleteTask, markAsFocus, markAsUnfocus }) {
    const [focusTaskId, setFocusTaskId] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('All Tasks');
    const taskFilterItems = [
        'All Tasks',
        'Todo',
        'In Progress',
        'Pending',
        'Completed'
    ];

    const setUnfocus = () => {
        setFocusTaskId(null);
        markAsUnfocus();
    };

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId);
    };
    const filteredTasks = selectedFilter === 'All Tasks'
        ? data
        : data.filter((task) => task.status === selectedFilter);

    return (
        <div>
            <TaskFilter
                filters={taskFilterItems}
                selectedFilter={selectedFilter}
                onSelectFilter={setSelectedFilter}
            />
            <div className="task-container">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
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
                    ))
                ) : (
                    <EmptyListMessage />
                )}
            </div>
        </div>
    );
}


export default TaskContainer;
