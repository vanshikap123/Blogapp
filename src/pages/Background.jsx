import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const Background=()=>{
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Videoes", 'Images', 'Ideas',"Memories"],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    return(
        <div className="container-fluid boxes">
            <div className=' back'>
                <h1 className='text-center '>My first Blog Website </h1>
                <h3  className='text-center'>Uploades Your <span  id='text' ref={el}></span></h3>
                <p className='text-center  fs-5'>Welcome to our blog app, your go-to platform for engaging and informative content on a wide range of topics. Whether you’re interested in technology, lifestyle, health, business, or travel, we've got something for everyone.</p>
                
            </div>

        </div>
    )
}
export default Background