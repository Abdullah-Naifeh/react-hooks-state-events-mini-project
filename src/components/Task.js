import React from "react";

function Task({text, category,deleteByValue ,value}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteByValue(value)} className="delete">X</button>
    </div>

  );
}

export default Task;
