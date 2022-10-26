import React, { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, []);

  function createTask(task) {
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      description: task.description
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
      }}>
        {props.children}
      </TaskContext.Provider>
    </>
  )

}

