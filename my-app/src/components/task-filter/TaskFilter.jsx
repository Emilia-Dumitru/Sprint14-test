import React from 'react';
import './TaskFilter.css';

const TaskFilter = ({ filters, selectedFilter, onSelectFilter }) => {
  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <div 
          key={filter} 
          className={`filter-item-container ${selectedFilter === filter ? 'active' : ''}`}
          onClick={() => onSelectFilter(filter)}
        >
          <span className={`filter-option ${selectedFilter === filter ? 'active' : ''}`}>
            {filter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskFilter;
