import React, { useContext } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import Modal from './Modal';
import NoteContext from '../context/NoteContext';

export default function Navbar() {
  const context = useContext(NoteContext);
  const {modalHide,setModalHide} = context
  let  navigate =  useNavigate();
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  const showModal=()=>{
    if(!modalHide)
    setModalHide(true)
    else
    setModalHide(false)
  }
  return (
    <>
        <nav className="navbar bg-dark border-bottom  w-100">
          {modalHide && <Modal modal={modalHide}/>}
  <div className="container-fluid my-3" style={{width:"50vw",margin:"0",paddingLeft:"20px"}}>
    <Link className="navbar-brand text-white" to="/">
      
      <h2>FocusUno🎯</h2>
    </Link>
  </div>
  {localStorage.getItem('token')? <div className="btn-group bg-dark" key={localStorage.getItem('token')} style={{marginRight:"4vw"}} >
  <button type="button" className="btn btn-danger   bg-dark border-dark" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" style={{borderRadius:"50%",height:"50px",width:"50px"}} alt="" />
  </button>
  <ul className="dropdown-menu ">
    <li><Link className="dropdown-item disabled" to="/">Account</Link></li>
    <li><Link className="dropdown-item disabled" to="/">About</Link></li>
    <li><Link className="dropdown-item disabled" to="/">Report</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><button className="dropdown-item"  onClick={logout}>Log Out</button></li>
  </ul>
</div>:<div className="btn-group bg-dark" style={{marginRight:"4vw"}}><button type="button" onClick={showModal} className="btn btn-outline-light" >About</button></div>}
</nav>
 </>
  )
}
