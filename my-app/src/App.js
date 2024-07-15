import React, { useState } from 'react';
import './App.css';
import TaskContainer from './components/task-container/TaskContainer';
import CreateTaskButton from './components/task-form/ButtonCreateTask';
import TaskData from './components/task-data/TaskData';

function App() {
  const initialData = TaskData().map(task => ({ ...task, isFocused: false }));
  const [tasks, setTasks] = useState(initialData);

  const addTask = (newTask) => {
    newTask.id= "T-"+ (tasks.length +1) ;
    setTasks([...tasks, { ...newTask, isFocused: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const markAsFocus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isFocused: true } : { ...task, isFocused: false }));
  };

  const markAsUnfocus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isFocused: false } : task));
  };

  return (
    <div className='task-manager-container'>
      <div className='control-panel-container'>
        <h1>Task Manager</h1>
        <CreateTaskButton addTask={addTask} />
      </div>
      <div className="app-container">
        <TaskContainer
          data={tasks}
          deleteTask={deleteTask}
          markAsFocus={markAsFocus}
          markAsUnfocus={markAsUnfocus}
        />
      </div>
    </div>
  );
}

export default App;
