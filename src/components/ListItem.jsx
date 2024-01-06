import React from 'react'

const ListItem = ({todos ,deleteTodo, editTodo}) => {
  return (
          <li className="list-group-item">
            {todos.text}
            <button className="btn btn-danger rounded-0 btn-sm float-end" onClick={()=>deleteTodo(todos.id)}>X</button>
            <button className="btn btn-primary rounded-0 btn-sm float-end me-2" onClick={() => editTodo(todos)}>U</button>
         </li>
  )
}

export default ListItem