import React from "react";
import "./index.css";

function Form({ todos, deleteHandler }) {

  return (
    
<table className="table">

<tr>
    <th>Task title</th>
    <th>Date to complete</th>
    <th>Action</th>
  </tr>
 {
   todos.map((todoItem,index)=>
      <tr>
        <td>{todoItem.task}</td>
        <td>{todoItem.date}</td>
        <td><button onClick={()=>{
          deleteHandler(index)
        }} >Delete</button></td>
      </tr>
   )
 }
  


  
  
</table>
          

  )
}
export default Form;
