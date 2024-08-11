{clicked &&  <div className="box1">
      
  <IoMdClose onClick={()=>setclicked(false)} size={"30px"} className='icons'/>
    <form action="">
      <label htmlFor="">Title</label>
      <input type="text"  ref={titleRef}/>
      <label htmlFor="" >Description</label>
      <textarea name="" ref={descRef} id=""></textarea>
      <label className='button1 text-center mt-4 pt-1' htmlFor="abc">upload Image</label>
   
      <input onChange={handleInputChange} hidden type="file" id='abc'/>
    {image &&   <img style={{margin:"20px auto"}} width={"200px"} height={"200px"}  src={URL.createObjectURL(image)} alt="" />}
  {!image && !video &&  <img style={{margin:"20px auto"}} width={"200px"} height={"200px"} src="https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text-thumbnail.png" alt="" />}
{ video  && <video controls style={{margin:"20px auto"}} width={"200px"} height={"200px"} src={URL.createObjectURL(video)}></video>}
    <button onClick={handlePostSubmit} className='button1'>Submit Blog</button>
    </form>
  </div>}