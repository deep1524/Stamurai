
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { getAllTAsk } from '@/api';

export default async function   Home() {
  const task=await getAllTAsk();
  console.log(task);
  return (
    <main  
    className="max-w-4xl mx-auto mt-20">
      <div >
      <h1 className='text-center text-2xl font-bold mb-4  '>Task Management Application</h1>
      <AddTask/>
      </div>
      
    <TaskList tasks={task}/>
    </main>
  )
}
