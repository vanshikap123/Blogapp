import React, { useState } from 'react'
import UserContext from './UserContext'


const UserState = (props) => {
 
    let userdetails = JSON.parse(localStorage.getItem('userDetails'))

    const [user, setUser] = useState( {
        id:userdetails ? userdetails.id : "",
        login:userdetails ? true: false,
        token:userdetails ? userdetails.token: ""
    });
    console.log(user)
  return (
    <UserContext.Provider value={{user,setUser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState