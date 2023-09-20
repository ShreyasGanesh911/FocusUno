import React,{ useState } from 'react';
import {useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function Signup() {
    let  navigate =  useNavigate();
    const[cred,setCred]=useState({email:"",password:"",Cpassword:"",name:"",phone:""})
    const signupForm = async(e)=>{
        e.preventDefault();
        if(cred.email===""||cred.password===""||cred.name===""||cred.phone===""){
            toast("⚠️ Incomplete Form",{position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",})
          return
            
          }
          if(cred.Cpassword!==cred.password){
            toast("⚠️ Password doesn't match",{position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",})
          return
            
          }
          try{ const response = await fetch(`http://localhost:9000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({ email:cred.email, password:cred.password,phone:cred.phone,name:cred.name }),
        });
        const json = await response.json();
       
        if(json.success){
          localStorage.setItem('token',json.authToken.user.id)
          
          setTimeout(()=>{navigate('/')},2000)
          toast("✅ Signed Up successfully",{position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",})
        }
        if(json.exist){
            toast("⚠️ User exists",{position: "top-center",
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
        console.log(e)
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
    
    }
    const onChange = (e)=>{
        setCred({...cred,[e.target.name]:e.target.value})
      }


  return (
    <>
      <div className='bg-dark displayFlex text-white' style={{width:"100vw",height:"93vh"}} id='signupPage'>
      <form style={{width:"30vw",border:"1px solid black",padding:"60px",borderRadius:"30px"}} id='loginForm' className='bg-dark' onSubmit={signupForm}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control bg-dark text-white" id="name" name="name" aria-describedby="emailHelp" onChange={onChange}/>
     </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control bg-dark text-white" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
     </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
    <input type='tel' className="form-control bg-dark text-white" id="phone" name="phone" aria-describedby="emailHelp"  maxLength = "10" onChange={onChange}/>
     </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control bg-dark text-white" id="password" name="password" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control bg-dark text-white" id="Cpassword" name="Cpassword" onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary btn-dark border-light">Signup</button>
</form>

      </div>
      <ToastContainer />
    </>
  )
}
