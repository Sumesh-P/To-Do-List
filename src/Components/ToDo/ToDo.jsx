import React, { useState } from 'react'

function ToDo() {
    const[tasks,setTasks]=useState([])
    const[newTask,setNewTask]=useState("")
    const handleInputChange=(e)=>{
        setNewTask(e.target.value);
    }
    const AddTask=()=>{
       if(newTask.trim()!==""){
        setTasks([...tasks,newTask])
        setNewTask("")
       }
    }
    const DeleteTask=(index)=>{
       setTasks(tasks.filter((_,ind)=>(
          ind!=index
       )))
    }
    const taskUp=(index)=>{
        if(index>0){
            const UpdatedTasks=[...tasks];
            [UpdatedTasks[index],UpdatedTasks[index-1]]=[UpdatedTasks[index-1],UpdatedTasks[index]];
            setTasks(UpdatedTasks);
        }
    }
    const taskDown=(index)=>{
        if(index<tasks.length-1){
            const UpdatedTasks=[...tasks];
            [UpdatedTasks[index],UpdatedTasks[index+1]]=[UpdatedTasks[index+1],UpdatedTasks[index]];
            setTasks(UpdatedTasks);
        }
    }
  return (
    <div className="mainDiv">
        <h1>To-Do-List</h1>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder='Enter a task'/>
        <button onClick={AddTask} className='add-button'>Add</button>
        <ul>
            {
                tasks.map((item,index)=>(
                    <li key={index}><span className='text'>{item}</span>
                     <button onClick={()=>DeleteTask(index)}className='delete-button'>Delete</button>
                     <button onClick={()=>taskUp(index)} className='move'>Up</button>
                     <button onClick={()=>taskDown(index)} className='move'>Down</button>
                     </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ToDo