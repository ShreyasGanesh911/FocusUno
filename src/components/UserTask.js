import React,{useContext, useEffect} from 'react';
import {useNavigate } from 'react-router-dom'
import NoteContext from '../context/NoteContext';
import TaskDisplay from './TaskDisplay';
export default function UserTask() {
  let  navigate =  useNavigate();
    const context = useContext(NoteContext);
  let {notes,getNotes} = context;
  useEffect(()=>{
    
    if(localStorage.getItem('token'))
      getNotes();
    else
    navigate('/login')
    //console.log(typeof(notes))
  },[getNotes,navigate])
  return (
    <div className='displayFlex' style={{flexDirection:"column"}}>
      <div  className='displayFlex'>
      <h1>{notes.length===0 && "No task is added"}</h1>
      </div>
      
    {notes.map((note)=>{
      
      return <TaskDisplay key={note._id} note={note}/>
    })}
  </div>
  )
}
