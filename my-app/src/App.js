import React, {useState} from 'react';
import './App.css';
import TaskContainer from './components/task-container/TaskContainer';
import CreateTaskButton from './components/task-form/ButtonCreateTask';
import TaskData from './components/task-data/TaskData';

function App() {
  const initialData = TaskData();
  const [tasks, setTasks] = useState(initialData); 

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <div className='control-panel-container'>
        <h1>Task Manager</h1>
        <CreateTaskButton addTask={addTask} />
      </div>
      <div className="app-container">
        <TaskContainer data={tasks} />
      </div>
    </div>
  );
}
export default App;
