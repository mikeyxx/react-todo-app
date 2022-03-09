import React from "react";
import * as FaIcons from "react-icons/fa";

function Task({ task, dispatch }) {
  return (
    <>
      <div
        className={`container ${task.reminder ? "active" : ""}`}
        onDoubleClick={() =>
          dispatch({ type: "TOGGLE_TASK", payload: { id: task.id } })
        }
      >
        <div className="taskContainer">
          <h1>{task.task}</h1>
          <p>{task.day}</p>
        </div>
        <FaIcons.FaTimes
          className="icon"
          onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: { id: task.id } })
          }
        />
      </div>
    </>
  );
}

export default Task;
