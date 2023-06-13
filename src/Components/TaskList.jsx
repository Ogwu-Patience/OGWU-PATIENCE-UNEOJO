import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, markComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markComplete={markComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
