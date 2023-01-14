import React from "react";
import Task  from "../components/Task";

function TaskList({tasks, deleteByValue}) {
  return (
    <div className="tasks">
      {tasks.map((task , index) => <Task value={task} key={index} text={task.text} category={task.category} deleteByValue={deleteByValue}/>)}
    </div>
  );
}

export default TaskList;
