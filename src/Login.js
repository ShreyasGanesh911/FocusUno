import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
  const[cred,setCred]=useState({email:"",password:""})
  let  navigate =  useNavigate();
  const loginForm = async(e)=>{
      e.preventDefault();
      if(cred.email===""||cred.password===""){
        toast("⚠️ Enter valid credentials",{position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",})
      return
        
      }
      try{ const response = await fetch(`http://localhost:9000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({ email:cred.email, password:cred.password }),
        });
        const json = await response.json();
       
        if(json.success){
          localStorage.setItem('token',json.authToken.user.id)
          navigate('/')
        }
        else{
          toast("⚠️ Enter valid credentials",{position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",})
      return
        }
      }catch(e){
        toast("⚠️ Enter valid credentials {Catch}",{position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",})
      return
      }
  }
  const onChange = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }
  return (
    <>
     <div className='bg-dark displayFlex text-white' id='loginPage' style={{width:"100vw",height:"auto",minHeight:"90vh",alignItems:'flex-start',flexDirection:"column"}}>
      <div className=' displayFlex text-white'  style={{width:"100%",height:"80vh",flexDirection:"column"}}>
      <div> 
        <div><h1 id='headingAbout' style={{fontSize:"90px",textAlign:"center"}}>FocusUno🎯</h1></div>
          <div><h4 style={{textAlign:"center"}}>Your To-Do list made simple</h4></div>
          </div> 
     <form style={{width:"30vw",border:"1px solid black",padding:"60px",borderRadius:"30px"}} id='loginForm' className='bg-dark my-3' onSubmit={loginForm}>
  <div className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label " >Email address</label>
    <input type="email" className="form-control bg-dark text-white" id='emall' name='email' aria-describedby="emailHelp" value={cred.email} onChange={onChange} placeholder='Email'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
    <input type="password" className="form-control bg-dark text-white" id="password" name="password" value={cred.password} placeholder='Password' onChange={onChange} />
  </div>
  
  <button type="submit" id='loginBtn' className="btn btn-primary btn-dark border-light"  >Login</button>
  <Link to="/signup" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' style={{position:"relative",float:"right",marginTop:"10px",zIndex:"0"}} >Create a new user</Link>
</form>
      
</div> 

      </div> 
      <ToastContainer />
    </>
  )
} 


