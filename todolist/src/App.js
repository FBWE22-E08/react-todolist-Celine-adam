import "./App.css";
import { useState } from "react";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState({ taskName: "", setDone: true });
  const [tasksArray, setArray] = useState([]);
  const handleChange = (e) => {
    setTask({ ...task, taskName: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (tasksArray.some((item) => item.taskName === task.taskName) === false) {
      setArray([...tasksArray, task]);
    }
  };
  const handleSetDone = (index) => {
    console.log(tasksArray);
    const updatedArray = tasksArray.map((item, i) =>
      index === i ? { ...item, setDone: !item.setDone } : item
    );

    setArray(updatedArray);
  };
  const handleDelete = (index) => {
    const updatedArray = tasksArray.filter((item, i) => i !== index);

    setArray(updatedArray);
  };

  return (
    <div className="App">
      <form>
        <h3>Define your task</h3>
        <input
          className="input-task"
          onChange={handleChange}
          name="taskName"
        ></input>
        <button className="btn-add" onClick={handleAdd}>
          Add a task
        </button>
      </form>
      <Task
        tasksArray={tasksArray}
        handleSetDone={handleSetDone}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
