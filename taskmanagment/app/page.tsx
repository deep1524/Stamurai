
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { getAllTAsk } from '@/api';
// className="flex min-h-screen flex-col items-center justify-between p-24  min-w-max" 
export default async function   Home() {
  const task=await getAllTAsk();
  console.log(task);
  return (
    <main  
    className="max-w-4xl mx-auto mt-4">
      <div >
      <h1 className='text-center text-2xl font-bold mb-4  '>Task Management Application</h1>
      <AddTask/>
      </div>
      
    <TaskList tasks={task}/>
    </main>
  )
}
