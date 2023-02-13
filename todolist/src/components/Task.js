import React from "react";

export default function Task({ tasksArray, handleSetDone, handleDelete }) {
  return (
    <div>
      {tasksArray.map((item, i) => (
        <div key={i} className="box">
          <h2> {item.taskName} </h2>
          <p> {item.setDone ? "completed" : "uncompleted"} </p>

          <button className="btn-delete" onClick={() => handleDelete(i)}>
            delete
          </button>

          <button className="btn-set" onClick={() => handleSetDone(i)}>
            set to Done
          </button>
        </div>
      ))}
    </div>
  );
}
