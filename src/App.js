import { useReducer, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function reducer(tasks, action) {
  switch (action.type) {
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload.id);
    case "TOGGLE_TASK":
      return tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, reminder: !task.reminder }
          : task
      );
    case "ADD_TASK":
      return [...tasks, newTask(action.payload.task, action.payload.day)];
    default:
      return tasks;
  }
}

function newTask(task, day) {
  return { id: Date.now(), task: task, day: day, reminder: true };
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, [
    {
      id: 1,
      task: "Lunch with Seyi",
      day: "Today @ 2pm",
      reminder: true,
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app">
      <Header onAdd={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask dispatch={dispatch} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} dispatch={dispatch} />
      ) : (
        <h1 className="task-length">No tasks to show</h1>
      )}
    </div>
  );
}

export default App;
