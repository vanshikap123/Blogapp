import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../context/UserContext';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const YourBlogs = () => {
  const [clicked, setclicked] = useState(false);
  let titleRef = useRef()
  let contentRef = useRef()
  const [postId, setpostId] = useState("");
  const [yourPost, setyourPost] = useState([]);

  let ctx = useContext(UserContext)
  let id = ctx.user.id;
  let token = ctx.user.token;

  async function xyz(){
    let res = await fetch(`https://backend-er58.onrender.com/posts/allpost/${id}`,{
      method:"GET",
      headers:{
        'content-type':'application/json',
        'authorization':token
      }
    })

    let data = await res.json()
    console.log(data.post)
    setyourPost(data.post)
  }

  useEffect(()=>{
    xyz()
  },[])

 async function handleDelete(ans){
    console.log(ans._id)
    let res = await fetch(`https://backend-er58.onrender.com/posts/delete/${ans._id}`,{
      method:"DELETE"
    })

    let data = await res.json()
    console.log(data)
    xyz()
  }

  const [image, setimage] = useState("");
  const handleInputChange = (e)=>{
    let file = e.target.files[0];
    setimage(file)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(image)
    let reader = new FileReader()
    if(image){
      reader.readAsDataURL(image);
      reader.onload =async()=>{
        console.log(reader.result)
        let res = await fetch(`https://backend-er58.onrender.com/post/update/${postId}`,{
          method:"PUT",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({title:titleRef.current.value,content:contentRef.current.value,image:reader.result})
        })
        let data = await res.json()
        console.log(data)
        xyz()
        setclicked(false)
      }
      reader.onerror = ()=>{
        console.log(reader.error)
      }
    }
    else{
    
      let res = await fetch(`https://backend-er58.onrender.com/posts/update/${postId}`,{
        method:"PUT",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({title:titleRef.current.value,content:contentRef.current.value})
      })
      let data = await res.json()
      console.log(data)
      xyz()
      setclicked(false)
    }
    
  }

  const hanadleEdit =(ans)=>{
    setclicked(true)
    console.log(ans)
    console.log(ans._id)
    setpostId(ans._id)
  }
  return (
    <div className=' back1'>
      <div className='row d-flex gap-5'>
          {yourPost.map((ele)=>{return <div key={ele._id} className="card bg-black box text-white p-2" style={{width: '18rem'}}>
  <img src={ele.image} className="card-img-top img" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className='cart-text'>Author:{ele.author.name}</p>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <button  className="button1"> <Link to="/single" state={ele} >Blog</Link></button>
    <MdDelete onClick={()=>handleDelete(ele)} size={"35px"} color='white' className='icon2' />
    <CiEdit onClick={()=>hanadleEdit(ele)} size={"35px"} color='white' className='iconDelete'   />
  </div>
</div>})}
    </div>

   { clicked && <div className="box1">
    <IoMdClose onClick={()=>setclicked(false)} size={"30px"} className='icons'/>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text"  ref={titleRef}/>
        <label htmlFor="">Content</label>
        <input ref={contentRef} name="" id=""></input>
        <label className='button1 text-center my-4 pt-1' htmlFor="file">Photo/Video</label>
        <input onChange={handleInputChange} type="file" hidden id='file'/>
       {!image && <img src="https://cdn.dribbble.com/users/4625326/screenshots/19602645/comp_2.gif" className='shadow1' style={{width:"200px" ,height:"200px",margin:"auto"}} alt="" />}
       {image && <img src={URL.createObjectURL(image)} style={{width:"200px" ,height:"200px"}} alt="" />}
        <button onClick={handleSubmit} className='button1 my-4'>Submit</button>
      </form>
    </div>}
    </div>
  )
}

export default YourBlogs