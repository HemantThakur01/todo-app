import Navbar from "./components/Navbar"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import { useState } from "react"

function App() {

  const [name , setName] = useState("Ultimate Todo App")

  const [todos, setTodos] = useState([])

  const[edit , setEdit] = useState({
    todo : [],
    isEdit : false
  
  })

  const deleteTodo = (id) => {
    // setTodos(todos.filter((todo) => {
    //   if(todo.id !== id){
    //      return true
    //   }
    // }))
    setTodos(todos.filter((todo) => todo.id !==id))
  }

  const saveTodo = (text) => {
    const newTodo = {
      id : crypto.randomUUID(),
      text : text
    }
    setTodos([...todos,newTodo])
  }

  const editTodo = (todo) => {
    setEdit ({
       todo : todo,
       isEdit : true
    })
  }

  const updateTodo = (id , text) => {
   setTodos(todos.map((todo) => todo.id === id ? {todo, text : text} : todo ))
   setEdit({
    todo : [],
    isEdit : false
   })
  }

  return (
    <>
      <Navbar name={name}/>
      <div className="container p-5">
        <Form saveTodo={saveTodo} edit={edit} updateTodo={updateTodo}/>
        <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    </>
  )
}

export default App