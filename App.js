import React,{useState} from "react";
import TodoList from "./TodoList";
import "./index.css";

function App(){
const [task,setTask]=useState("");
const [todos,setTodos]=useState([]);
const changeHandler =e=>{
  setTask(e.target.value)
}
const submitHandler= e=>{
  e.preventDefault();
  const newTodos=[...todos,task];
  setTodos(newTodos);
  setTask("");
}
const deleteHandler= (indexValue)=>{
  const newTodos=todos.filter((todo,index)=>index!==indexValue);
  setTodos(newTodos);
}
  return(
    <div className="card">
      <div>&nbsp;
        <h1>Todo Application</h1>&nbsp;
        <form onSubmit={submitHandler}>
        <input type="text" name="task" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
        <button>Add</button>
        </form>
      </div>
      <TodoList todolist={todos} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default App;