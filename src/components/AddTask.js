import React, { useState } from "react";

function AddTask({ dispatch }) {
  const [task, setTask] = useState("");
  const [day, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) {
      alert("Please fill empty field(s)");
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: { task: task, day: day, reminder: false },
      });
    }

    setTask("");
    setDate("");
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <div className="textFields">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.currentTarget.value)}
          />
        </div>
        <div className="textFields">
          <label htmlFor="day">Date & Time</label>
          <input
            type="text"
            id="day"
            value={day}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>

        <button className="submit-Btn">Save Task</button>
      </form>
    </>
  );
}

export default AddTask;
