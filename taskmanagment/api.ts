import { ITask } from "./types/task";
const baseUrl = "http://localhost:3001";
export const getAllTAsk = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`,{cache:"no-store"});
    const tasks = await res.json();
    return tasks;
}

export const addTask = async (task:ITask):Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(task)
    });
    const newTask = await res.json();
    return newTask;
}
export const EditTask = async (task:ITask):Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(task)
    });
    const updatedTask = await res.json();
    return updatedTask;
}
export const DeleteTask = async (task:ITask):Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: "DELETE",
      
    });
    const deletedTask = await res.json();
    return deletedTask;
}