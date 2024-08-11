import { useRef } from "react"

const Forget=()=>{

let inputref=useRef()
const handleclick=async(e)=>{
e.preventDefault()
let user = inputref.current.value
console.log(user)
let res = await fetch(`http://localhost:4000/user/forgetpassword`,{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({email:user})
})
let data= await res.json()
console.log(data)
}


    return(
        <div>
          <form className="w-25 m-auto mt-5">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={inputref} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <button onClick={handleclick} type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    )
}
export default Forget