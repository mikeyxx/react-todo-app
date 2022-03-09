import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, dispatch }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} dispatch={dispatch} />;
      })}
      <p className="instruct">
        <small>Double click on each task to toggle reminder</small>
      </p>
    </>
  );
};

export default Tasks;
