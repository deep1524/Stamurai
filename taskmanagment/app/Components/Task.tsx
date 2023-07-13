"use client";
import { DeleteTask, EditTask } from "@/api";
import { ITask } from "@/types/task";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
interface TaskProps {
  task: ITask;
  
}

const Task: React.FC<TaskProps> = ({ task}) => {
  const rounter = useRouter();

  const [openModelEdit, setOpenModelEdit] = useState<boolean>(false);
  const [openModelDelete, setOpenModelDelete] = useState<boolean>(false);
  const [taskTitleedit, setTaskTitleEdit] = useState<string>(task.title);
  const [taskDescedit, setTaskDescEdit] = useState<string>(task.description);
  const [taskStatusedit, setTaskStatusEdit] = useState<string>(task.status);
  const handleSubmitNewTaskEdit: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    await EditTask({
      id: task.id,
      title: taskTitleedit,
      description: taskDescedit,
      status: taskStatusedit,
    });

    // setTaskTitleEdit("");
    // setTaskDescEdit("");
    // setTaskStatusEdit("");
    setOpenModelEdit(false);
    rounter.refresh();
  };
  const handleSubmitDeleteTask = async () => {
    await DeleteTask(task);
    setOpenModelDelete(false);
    rounter.refresh();
  };
  return (
    <tr className="bg-base-200">
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.status}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModelEdit(true)}
          cursor="pointer"
          className="text-blue-800"
          size={25}
        />
        <dialog
          id="my_modal_3"
          className={`modal ${openModelEdit ? "modal-open" : ""} `}
        >
          <form
            method="dialog"
            className="modal-box"
            onSubmit={handleSubmitNewTaskEdit}
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setOpenModelEdit(false)}
            >
              ✕
            </button>

            <h3 className="font-bold text-center">Edit Your TASK</h3>
            <div className="model-action mt-5">
              <input
                value={taskTitleedit}
                onChange={(e) => setTaskTitleEdit(e.target.value)}
                type="text"
                placeholder="Enter your Task here"
                className="input input-bordered w-full mb-5 "
              />
              <input
                value={taskDescedit}
                onChange={(e) => setTaskDescEdit(e.target.value)}
                type="text"
                placeholder="Enter your Description here"
                className="input input-bordered w-full mb-5  "
              />
              <input
                value={taskStatusedit}
                onChange={(e) => setTaskStatusEdit(e.target.value)}
                type="text"
                placeholder="Enter your Status here"
                className="input input-bordered w-full mb-5 "
              />
            </div>
            <button type="submit" className="btn w-full">
              Submit
            </button>
          </form>
        </dialog>


        
        <RiDeleteBin6Fill
          onClick={() => setOpenModelDelete(true)}
          cursor="pointer"
          className="text-red-600"
          size={25}
        />

        <dialog
          id="my_modal_3"
          className={`modal ${openModelDelete ? "modal-open" : ""} `}
        >
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500"
              onClick={() => setOpenModelDelete(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mb-5 text-red-500">
              Are You Sure, you want to Delete this task..?
            </h3>

            <button
              onClick={handleSubmitDeleteTask}
              type="submit"
              className="btn w-full text-white bg-lime-400"
            >
              YES
            </button>
          </div>
        </dialog>
      </td>
    </tr>
  );
};

export default Task;
