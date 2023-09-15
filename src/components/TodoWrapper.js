import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodo } from './EditTodo';
uuidv4();

export const TodoWrapper = () => {
   const [todos, setTodos] = useState([]);
   const [Search, setSearch] = useState('');
   const [sortOrder, setSortOrder] = useState('');
  const addTodo = todo => {
    if(todo)
        setTodos([...todos, {id:uuidv4(), title:todo.title, description:todo.description, completed: false, isEditing: false}]);
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task , id) => {
   
    setTodos(todos.map(todo => todo.id === id ? {...todo, title:task.title, description:task.description, isEditing: !todo.isEditing} : todo))
  }

  const handleChangeSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedItems = [...todos].sort((a, b) => {
    if (sortOrder === 'asc') {
      return 1;
    } else {
      return -1;
    }
    setSortOrder('');
  });

  return (
    <div className='TodoWrapper'>
        <h1>Todo / Task</h1>
        <TodoForm addTodo={addTodo}/>
        <form>
            <input className="todo-input" onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' />&nbsp;
            <select className="todo-input" onChange={handleChangeSortOrder} value={sortOrder}>
              <option value="">--Sort By--</option>
              <option value="asc">Old</option>
              <option value="desc">Latest</option>
            </select>
        </form>
        
        {sortedItems.filter((todo) => {
          return Search.toLowerCase() === '' ? todo : todo.title.toLowerCase().includes(Search)
        }).map((todo,index) => (
            todo.isEditing ? (
              <EditTodo key={index} editTodo={editTask} task={todo}/>
            ) : (
              <Todo task={todo} 
                  key={index}  
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}/>
            )
            
        ))}
        
    </div>
  )
}
