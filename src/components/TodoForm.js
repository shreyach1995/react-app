import React, {useState} from 'react';

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    let newTodoItem = {
        title: value,
        description: description
    }
    addTodo(newTodoItem);
    setValue("");
    setDescription("");
    //addTodo(description);
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Todo/Task Title" value={value} onChange={(e) => setValue(e.target.value)}/>&nbsp;&nbsp;
        <input type="text" className="todo-input" placeholder="Todo/Task Description" value={description} onChange={(e) => setDescription(e.target.value)}/>&nbsp;&nbsp;
        <button type="submit" className='todo-btn'>Add</button>
    </form>
  )
}