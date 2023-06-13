// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, deleteTask, markComplete }) => {
  const handleComplete = () => {
    markComplete(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <div>
        <button
          className="btn btn-success btn-sm"
          onClick={handleComplete}
        >
          Complete
        </button>
        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
