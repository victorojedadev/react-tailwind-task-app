
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  return (
    <>
      <main className='h-screen pt-5'>
        <div className='container mx-auto'>
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </>

  )
}

export default App

