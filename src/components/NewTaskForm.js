import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [newItem, setNewItem] = useState('')
  const [addCategory, setAddCategory] = useState('code')

  const newArray = categories.slice(1)

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({text : newItem , category : addCategory})
    setNewItem('')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={addCategory} onChange={e => setAddCategory(e.target.value)}>
          {newArray.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
