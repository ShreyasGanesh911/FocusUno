import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
export default function Account() {
    let  navigate =  useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token'))
          getNotes();
        else
        navigate('/login')
      },[])
  return (
    <div>
      
    </div>
  )
}
