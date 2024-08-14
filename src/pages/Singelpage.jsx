import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const Singelpage = () => {
    const location= useLocation();
    console.log(location.state)
  return (
    <div className='row m-auto w-75 my-5 shadow-lg p-3 bg-black'>
    <div className="col-md-6 w-50 ">
        <img src={location.state.image} className='w-100' alt="" srcset="" />
    </div>
    <div className="col-md-6 text-center m-auto">

        <h1 className='colores'>{location.state.title}</h1>
        <p className='colores fs-2'>Description: {location.state.content}</p>
        <p className='text-white'>Author Name:{location.state.author.name}</p>
     <button className='button1'><Link to="/">Go Home</Link></button>
      
    </div>
    </div>
  )
}

export default Singelpage