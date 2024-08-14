'use client'
import { useState } from "react"
import React from 'react'


const page = () =>{
  const [Task, setTask] = useState("")
  const handleAddTask=(e)=>{
    e.preventDefault();
    
    
    const node = document.createElement('div');
    node.className = 'h-[20px] w-[250px] flex justify-center items-center text-[1vw] text-black font-bold bg-yellow-200';
    
    // Set the innerHTML of the div to include the task
    node.innerHTML = `<h1>${Task}</h1>`;
  
    // Get the parent element where the new div will be appended
    const parentDiv = document.getElementsByClassName('html')[0];
    
    // Append the new div to the parent
    parentDiv.appendChild(node);
   
  }
  return (
  <>


    <div className='html absolute right-14 top-9'  >
      
    </div>
    <div className='flex flex-col gap-8'>
       <h1 className='text-5xl font-black text-white tracking-widest bg-black flex justify-center p-4 rounded shadow-2xl mt-4 '>TO  DO  LIST</h1>
      

        <div className='h-[450px] w-[500px] bg-violet-200 flex flex-col justify-end  items-center rounded-xl shadow-md p-2' >
          <form className='flex flex-end items-center gap-8'>
          <input type='text' onChange={(e)=>setTask(e.target.value)} className='h-[50px] w-[300px] border-blue-900 border-3 p-6   bg-white rounded-xl shadow-md flex items-center ' placeholder='Enter your task here'></input>
         
          <button onClick={handleAddTask}className='h-[50px] w-[100px] bg-green-400 p-2 rounded-xl'>ADD TASK</button>
          </form>
       </div>
    <footer className="flex flex-col justify-center items-center text-bold">
      
     <h1>@copyright reserved</h1> 
      Created by Sheersh Sharma
    </footer>
    </div>
  </>

           
    

    

  )
}

export default page
