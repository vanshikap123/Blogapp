import React, { useContext, useRef } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import UserContext from '../context/UserContext';


const Login = () => {


  let ctx = useContext(UserContext)
  console.log(ctx)

  let navigate = useNavigate()

  let emailRef = useRef()
  let passwordRef = useRef()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    let res = await fetch('https://backend-er58.onrender.com/user/login',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })

    let data = await res.json()
    console.log(data)
    if(data.success){
      toast.success(data.msg ,{position:"top-center"})
      localStorage.setItem('userDetails',JSON.stringify({login:true,token:data.token,id:data.id}))

      ctx.setUser({login:true,token:data.token,id:data.id})

      navigate('/')
    }else{
      toast.error(data.msg,{position:"top-center"})
    }

  }
  return (
    <div>
      <form className='col-md-6 m-auto mt-5 shadow-lg p-4 bg-black text-white rounded'>
        <h3 className='text-center fs-1 colores'>Login form</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input ref = {emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input ref = {passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className=' forget '>
        <button onClick={handleSubmit} type="submit" className="button2 my-3">Login</button>
     
  <button className='button1'>  <Link to='/forget'>Forget Password</Link>
  </button>
 
</div>
<h5 className='text-center'>or</h5>
<p className='text-center '>don't have an account <Link to={'/register'}>Register</Link></p>
      </form>




    </div>
  )
}

export default Login