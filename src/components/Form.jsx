import React, { useEffect, useState } from 'react'

const Form = ({saveTodo , edit ,updateTodo}) => {

const [text , setText] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
 if(edit.isEdit){
  updateTodo(edit.todo.id,text)
 }else{
  saveTodo(text)
 }
  setText("")
}

useEffect(() => {
  setText(edit.todo.text)
},[edit])

  return (
          <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <input value={text} type="text" className="form-control rounded-0" placeholder='type here...'onChange={(e) => setText(e.target.value)}/>
          </div>
        
          <button type="submit" className="btn btn-primary w-100 rounded-0">Submit</button>
        </form>
  )
}

export default Form