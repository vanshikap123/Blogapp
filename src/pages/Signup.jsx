import React, { useRef } from 'react'

import { Link,  useNavigate } from 'react-router-dom';
const Signup = () => {

let navigate= useNavigate()


     let nameRef = useRef()
     let passwordRef = useRef()
     let emailRef = useRef()
     let addressRef = useRef()

 const handlesubmit=async(e)=>{
    
    e.preventDefault();
    let obj={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      address:addressRef.current.value

    }
    console.log(obj)

    let response = await fetch('https://backend-er58.onrender.com/user/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    });
    let data = await response.json()
    console.log(data)
    if(data.success){
      navigate('/login')
    }else{
      alert(data.msg)
    }
  }
 
  return (
    <div >
<div className="row w-75 m-auto my-5 text-white bg-black rounded rows">
  <div className="col-md-5 colums rounded colums " >
  <p className='text-center box4 fs-1 text-white pera'>You have an account</p>
 <button className='btnn'> <Link  to='/login'>Login</Link></button>

  </div>
  <div className="col-md-7 p-3">
  <form className=' m-auto  '>
    <h1 className='text-center colores'>Signup Form</h1>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input ref={nameRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input ref={emailRef} type="email" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">address</label>
    <input ref={addressRef} type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button onClick={handlesubmit}  type="submit" className="btnn d-flex m-auto">Submit</button>
</form>

  </div>
</div>
    </div>
  )
}

export default Signup;