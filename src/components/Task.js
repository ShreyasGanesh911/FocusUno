import React,{useContext, useState} from 'react';
import UserTask from './UserTask';
import NoteContext from '../context/NoteContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Task() {
  const context = useContext(NoteContext);
  const {addNote} = context;
  const [task,setTask]=useState({title:"",description:""}) 
  const addTask = (e) =>{
    e.preventDefault()
    
    if(task.title==="") {
      toast("⚠️ Enter a task!",{position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",})
      return
    }
    addNote(task.title,task.description);
    setTask({title:""})
    toast("✅ Added!",{position: "bottom-right",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",})
  }
  const onChange = (e)=>{
    setTask({...task,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className='displayFlex bg-dark text-white ' style={{width:"100%",height:"auto",flexDirection:"column",minHeight:"100vh",justifyContent:"flex-start",padding:"10vh"}}>
        <div id="taskContainer" style={{width:"80vw",height:"75%",borderRadius:"30px"}}>
            <div id="taskBox" className='displayFlex ' style={{height:"20%"}}>
            <input id='title' name='title' onChange={onChange} className="bg-white"  value={task.title} type="text"style={{width:"80%",borderRadius:"8px", border:"none" ,height:"5vh",paddingLeft:'20px'} } placeholder="Try adding 'Complete project one' " />
            <button id='taskButton' name="taskButton" onClick={addTask} type="button" className="btn btn-warning" style={{margin:"20px"}} >Add ToDo</button>
            </div>
            <UserTask/>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
