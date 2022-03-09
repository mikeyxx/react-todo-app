import React from "react";

const Button = ({ showForm, onAdd }) => {
  return (
    <div className="btn">
      <button
        onClick={() => onAdd()}
        style={{ backgroundColor: showForm ? "red" : "#00968c" }}
      >
        {showForm ? "Close" : "Add a task"}
      </button>
    </div>
  );
};

export default Button;
