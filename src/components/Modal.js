import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/NoteContext';
export default function Modal() {
    const context = useContext(NoteContext);
    const {setModalHide} = context
    const closeModal=()=>{
        setModalHide(false)
    }
  return (
    <>
    <div className='modalWrapper'></div>
    <div id='modalContainer' className='text-white modalContainer bg-dark displayFlex' style={{flexDirection:"column"}}>
   
          <div><h2 id='headingAbout' style={{fontSize:"80px",textAlign:"center"}}>FocusUno🎯</h2></div>
          <div><h4 style={{textAlign:"center"}}>Your To-Do list made simple</h4></div>
          <div className='w-75 ' ><h5>Introducing "FocusUno" -  the ultimate productivity companion designed to simplify your life. With FocusUno, you can effortlessly manage your tasks, stay organized, and boost your productivity.</h5></div>
        <div className='displayFlex my-3'> <button className='btn btn-outline-light' onClick={closeModal}><Link className='nav-link' to='/'>close me</Link></button></div>
     
    </div>
    </>
  )
}
