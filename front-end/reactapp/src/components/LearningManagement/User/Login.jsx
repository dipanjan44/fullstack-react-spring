import React, {Component,useState} from 'react'

export const Login =({setUser}) =>{

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const handleUserNameChange=(event)=>
    {
        setUsername(event.target.value)
    }

    const handlePasswordChange=(event)=> {

        setPassword(event.target.value)

    }

    console.log("username", username)
    console.log("password", password)


    return(
        <form onSubmit={event=> {
            return(
                event.preventDefault(),
                setUser(username)
            )
        }}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" value={username} onChange={handleUserNameChange}/>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" id="password" value={password} onChange={handlePasswordChange}/>
            <input type="submit" disabled={username.length===0} value='Login'/>
        </form>
    )
}