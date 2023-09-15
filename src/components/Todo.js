import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,deleteTodo,editTodo}) => {
  return (
  <div className='Todo'>
          
          <h2> { task.title } </h2>
          <p> { task.description } </p>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
          </div>
          
  </div>
     
    
  )
}
