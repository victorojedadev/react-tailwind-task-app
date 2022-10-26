import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='text-white font-bold text-4xl text-center'>Sin tareas registradas</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2 p-4 rounded-md'>
      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))
      }
    </div>
  );
}

export default TaskList