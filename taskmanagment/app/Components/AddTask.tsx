"use client";
import { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Model from "./Model";

const AddTask = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  

  return (
    <div>
      <button
        onClick={() => setModelOpen(true)}
        className="btn btn-primary w-full mb-10"
      >
        Add New Task <AiOutlinePlus size={18} />
      </button>
      <Model modelOpen={modelOpen} setModelOpen={setModelOpen}/>
     
     
    </div>
  );
};

export default AddTask;
