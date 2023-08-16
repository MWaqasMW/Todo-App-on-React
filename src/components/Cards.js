import React, { useState } from 'react'
import "./Cards.css";
import TodoList from './TodoList'
import Add from './Button'
function Card() {
  const [todos , setTodos] =useState("")
  const[newTodos, newSetTodos]=useState([])
const handleChange=(event)=>{
  setTodos(event.target.value);
  
}

const handleAddTodo=()=>{

  newSetTodos((oldTodos)=>{
    return [todos, ...oldTodos]
  })
  setTodos("")
}


const handleDelete=(id)=>{


  console.log(id)
  newSetTodos((oldTodos)=>{
return (
  oldTodos.filter((arr, index)=>{
    return index !== id
  })
)
  }
  )
}

const handleEdit = (id, newText) => {
  console.log(newText)
  const updatedTodos = newTodos.filter((oldTodos , index) =>
    index === id ?  { text: newText } : newText
  

  );
  setTodos(updatedTodos);
};



  return (
    <>
    <div className='main d-flex'>
        <div className='center-div'>
  
<div className="card">
<h1 className='heading'>Todo App</h1>
<div className='input-field'>
<div className="input-group">
    <input
    onChange={handleChange}
    value={todos}
      type="email"
      className="input"
      id="Email"
      name="Email"
      placeholder="Enter Todos"
      autoComplete="off"
    />

  </div>
  <Add  foo={handleAddTodo} />
</div>
<hr />
<div className='todo-box'>
{  newTodos.map((value , index)=>{
    return <TodoList text ={value} key={index} id={index}  del={handleDelete} edit={handleEdit} />
  })}
</div>
</div>
  </div>

        </div>

    


    
    </>
  );
}

export default Card;