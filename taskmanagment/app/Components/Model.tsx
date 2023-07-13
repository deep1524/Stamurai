import { addTask } from "@/api";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";

interface ModelProps {
  modelOpen: boolean;
  setModelOpen: (open: boolean) => void | boolean;
}

const Model: React.FC<ModelProps> = ({ modelOpen, setModelOpen }) => {
  const router = useRouter();
  const [newTitleValue, setnewTitleValue] = useState<String>("");
  const [newDesValue, setnewDesValue] = useState<String>("");
  const [newStatusValue, setnewStatusValue] = useState<String>("");
  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (
      newTitleValue.length > 0 &&
      newDesValue.length > 0 &&
      newStatusValue.length > 0
    ) {
      await addTask({
        id: Date.now().toString(36),
        title: newTitleValue,
        description: newDesValue,
        status: newStatusValue,
      });
    }

    setnewTitleValue("");
    setnewDesValue("");
    setnewStatusValue("");
    setModelOpen(false);
    router.refresh();
  };
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modelOpen ? "modal-open" : ""} `}
    >
      <form
        method="dialog"
        className="modal-box"
        onSubmit={handleSubmitNewTask}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setModelOpen(false)}
        >
          ✕
        </button>

        <h3 className="font-bold text-center">ADD NEW TASK</h3>
        <div className="model-action mt-5">
          <input
            value={newTitleValue}
            onChange={(e) => setnewTitleValue(e.target.value)}
            type="text"
            placeholder="Enter your Task here"
            className="input input-bordered w-full mb-5 "
          />
          <input
            value={newDesValue}
            onChange={(e) => setnewDesValue(e.target.value)}
            type="text"
            placeholder="Enter your Description here"
            className="input input-bordered w-full mb-5  "
          />
          <input
            value={newStatusValue}
            onChange={(e) => setnewStatusValue(e.target.value)}
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
  );
};

export default Model;
