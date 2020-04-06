import React from 'react'


export const Logout = ({user,setUser}) => {
    return (
        <form onSubmit={event => {
            return(event.preventDefault(),
            setUser(''))}}>
            Logged in as: <b>{user}</b>
            <button> Logout</button>
        </form>
    )
}

