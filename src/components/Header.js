import React from "react";
import Button from "./Button";

function Header({ onAdd, showForm }) {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button onAdd={onAdd} showForm={showForm} />
    </div>
  );
}

export default Header;
