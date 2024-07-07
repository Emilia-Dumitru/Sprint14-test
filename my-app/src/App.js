import React from 'react';
import './App.css';
import TaskContainer from './components/task-container/TaskContainer';

function App() {

  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2024, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2024, 7, 24),
    },
    {
      id: "T-3",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2024, 6, 13),
    },
    {
      id: "T-4",
      name: "14 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2024, 5, 23),
    },
    {
      id: "T-5",
      name: "15 Create a Design System for Enum Workspace.",
      status: "Completed",
      dueDate: new Date(2024, 6, 13),
    },
    {
      id: "T-6",
      name: "Create a Design System for Enum Workspace.",
      status: "Pending",
      dueDate: new Date(2024, 5, 23),
    },
    {
      id: "T-7",
      name: "16 Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2024, 5, 23),
    },
    
  ];
  return (
    <div>
      <h1>Task Manager</h1>
      <div className="app-container">
        <TaskContainer data ={data}/> 
      </div>
    </div>
  );
}
export default App;
