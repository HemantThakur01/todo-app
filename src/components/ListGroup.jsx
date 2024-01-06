import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ todos,deleteTodo,editTodo}) => {
  return (
    <ul className="list-group mt-3 rounded-0">
   {
    todos.map((todo) =>  <ListItem key={todo.id} todos={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>)
   }
   
    </ul>
  )
}

export default ListGroup