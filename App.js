import React, { useEffect, useState } from "react";
import "./index.css";
import Form from "./Form";

//to get data from local storage

const getLocal=()=>{
  let todo=localStorage.getItem('lists');
  if(todo){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}

function App() {


  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(getLocal());

  const [date,setDate]=useState(new Date().getDate());

  const [validate,setValidate]=useState("");

  function changeHandler(e) {

    setTask(e.target.value)
  }
  function dateHandler(e){
    setDate(e.target.value)
  }
  //
  function submitHandler(e) {

    e.preventDefault();

    const newTodos = [...todos,{task,date}]

    setTodos(newTodos);
    setTask("");
    setDate("");


  }


  function deleteHandler(indexValue) {
    const del = todos.filter((todo, index) => index !== indexValue)
    setTodos(del)
  }
  // add data to local storage
  useEffect(()=>{
   localStorage.setItem('lists',JSON.stringify(todos))
  },[todos])
  return (
    <div className="App">
       &nbsp;&nbsp;
        <div className="input1"> 
          <input type="text" value={task} onChange={(e) => {
          changeHandler(e)
        }} />&nbsp;&nbsp;
        <input type="date" value={date} onChange={(e)=>{
           dateHandler(e)
        }}/>&nbsp;
        <button onClick={(e) => {
        if(task.length!=""){
          submitHandler(e)
        }
       
        else{
           setValidate("Please Enter Task!");
        }
        
        
      }}>Add</button>
        </div>
        
      
      &nbsp;
      <Form todos={todos} deleteHandler={deleteHandler} />
      {validate}
    </div>
    
  )
}
export default App
