import React, { useContext, useEffect, useRef, useState } from 'react'

import { IoMdClose } from "react-icons/io";

import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
import Background from './Background';


const Home = () => {

  let ctx = useContext(UserContext)
  console.log(ctx.user.id)

  let titleRef = useRef()
  let descRef = useRef()

  const [clicked, setclicked] = useState(false);


  const [posts, setAllPosts] = useState([]);

  const fetchAllPosts = async()=>{
    let res = await fetch('https://backend-er58.onrender.com/posts/allposts')
    let data = await res.json();
    console.log(data.posts)
    setAllPosts(data.posts)
  }

  useEffect(()=>{
    fetchAllPosts()
  },[])

  const [image, setimage] = useState("");
  const [video, setvideo] = useState("");

  const handleInputChange = (e)=>{
    console.log(e.target.files[0])
    let type = e.target.files[0].type.split('/')[0]
    if(type==="image"){
      setimage(e.target.files[0])

    }else{
      setvideo(e.target.files[0])
    }

  }

  const handlePostSubmit = async (e)=>{
    e.preventDefault()
    console.log("hi");
    

if(video){
  let form = new FormData()
  form.append('title',titleRef.current.value)
  form.append('content',descRef.current.value)
  form.append('author',ctx.user.id)
  form.append('video',video)
  let res = await fetch('https://backend-er58.onrender.com/uploadvideo',{
    method:"POST",
    body:form    
    })
  let data = await res.json()
  console.log(data)
  fetchAllPosts()
  setclicked(false)
  setimage(false)
}

  if(image){
      let form = new FormData()
      form.append('title',titleRef.current.value)
      form.append('content',descRef.current.value)
      form.append('author',ctx.user.id)
      form.append('image',image)
      let res = await fetch('https://backend-er58.onrender.com/uploadImage',{
        method:"POST",
        body:form    
        })
      let data = await res.json()
      console.log(data)
      fetchAllPosts()
      setclicked(false)
      setimage(false)
    }
    }
  
  return (
       <div className='bg-black'>
          <Background/>

      <div className='row  w-100 ms-0 p-1'>
      <div className="col-md-2 text-center my-3 m-auto ">
        <button onClick={()=>setclicked(true)} className='button1'>Create Blog</button>
      </div>
      
      <div className="col-md-10 m-auto  w-100  ">
      <div className='row gap-5 w-100 m-auto p-5'>
      {
        posts.map((ele)=>{
          return <div key={ele._id} className="card p-2 m-1 box bg-black text-white text-center" style={{width: '18.6rem'}}>
{ele.image &&  <img src={ele.image} className="card-img-top img"alt="..." />}
 {ele.video &&  <video controls src={ele.video} className='img'></video>}
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className='cart-text'>Author:{ele.author.name}</p>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<button  className="button1"> <Link to="/single" state={ele} >Blog</Link></button>
  </div>
</div>
        })
      }
    </div>
      </div>
      {clicked &&  <div className="box1">
        <IoMdClose onClick={()=>setclicked(false)} size={"30px"} className='icons'/>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input type="text" ref={titleRef} className="form-control" id="exampleInputEmail1" aria-describedby="" placeholder=" " />
  </div>
  <div className="form-group">
    <label htmlFor="">Description</label>
    <input type="text" ref={descRef} className="form-control" id="exampleInputEmail1" aria-describedby="" placeholder=" " />
 </div>
 <label className='button1 text-center mt-4 pt-1' htmlFor="abc"> photo/video</label>
   
   <input onChange={handleInputChange} hidden type="file" id='abc'/>
 {image &&   <img style={{margin:"20px auto"}} width={"150px"} height={"150px"}  src={URL.createObjectURL(image)} alt="" />}
{!image && !video &&  <img style={{margin:"20px auto"}} width={"200px"} height={"200px"} src="https://cdn.dribbble.com/users/4625326/screenshots/19602645/comp_2.gif" className='shadow1'  alt="" />}
{ video  && <video controls style={{margin:"20px auto"}} width={"200px"} height={"200px"} src={URL.createObjectURL(video)}></video>}
 <button onClick={handlePostSubmit} className='button1'>Submit Blog</button>
</form>

        </div>}

   </div>

    </div>

  )
}

export default Home