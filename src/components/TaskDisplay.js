import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function TaskDisplay(props) {
  const context = useContext(NoteContext);
  const {deleteNote} = context;
  return (
    <>
      <div className="displayFlex my-3" style={{width:"95%",border:"1px solid black",justifyContent:"flex-start",minHeight:"50px",paddingLeft:"10px",margin:0,height:"auto"}}> 
      <h4 style={{width:"92%",margin:"0px",color:'orange'}}>{props.note.title}</h4> 
      <i className="fa-sharp fa-solid fa-square-check fa-xl" onClick={()=>{ deleteNote(props.note._id);toast("✅ Completed!",{position: "bottom-right",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",})}}></i>
      </div> 
      <ToastContainer />
    </>
  )
}
