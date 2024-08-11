import React from 'react'
import { useLocation } from 'react-router-dom'

const Singelpage = () => {
    const location= useLocation();
    console.log(location.state)
  return (
    <div className='row m-auto w-75 my-5 shadow-lg p-3'>
    <div className="col-md-6 w-50">
        <img src={location.state.image} className='IMAGES' alt="" srcset="" />
    </div>
    <div className="col-md-6">

        <h1 className='text-danger'>{location.state.title}</h1>
        <p>Description:{location.state.content}</p>
        <p>Author Name:{location.state.author.name}</p>
        <p>Date:{location.state.date}</p>
     
      
    </div>
    </div>
  )
}

export default Singelpage