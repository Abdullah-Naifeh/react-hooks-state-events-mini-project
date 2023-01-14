import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [deleteTask, setDeleteTask] = useState(TASKS)
  const [category , setCategory] = useState('All')
  console.log(category)
  console.log(deleteTask)

  const deleteByValue = value => {
    setDeleteTask(oldValues => {
      return oldValues.filter(task =>task !== value)
    })
  }

  const itemsToDisplay = deleteTask.filter((task) => {
    if (category === "All") {
      return true;
    }
    return task.category === category;
  });

  function handleSubmit(item) {
    setDeleteTask([...itemsToDisplay, item]);
  }

  console.log(itemsToDisplay)
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={itemsToDisplay} deleteByValue={deleteByValue}/>
    </div>
  );
}

export default App;
