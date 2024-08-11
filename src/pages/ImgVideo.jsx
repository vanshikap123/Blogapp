const ImgVideo =()=>{
    return(
        <div>
<form action="">
    <label className="btn btn-success mt-2" htmlFor="video">Upload Video</label>
    <input  type="file" hidden id="video" />
    <label htmlFor="image">upload Image</label>
    <input  type="file" hidden id="image" />

</form>



        </div>
    )
}
export default  ImgVideo;