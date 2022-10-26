import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description
    }
    createTask(newTask);
    setTitle('');
    setDescription('');
  }

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>

        <h1 className='text-2xl font-bold text-white mb-3'>Crear tu Tarea</h1>
        <input type="text" placeholder='Titulo' onChange={(e) => { setTitle(e.target.value) }}
          value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea placeholder='Descripcion' onChange={(e) => { setDescription(e.target.value) }}
          value={description} className='bg-slate-300 p-3 w-full mb-2'>
        </textarea>
        <button className='bg-indigo-500 px-3 text-white'>
          Guardar
        </button>
      </form>

    </div>
  )
}

export default TaskForm