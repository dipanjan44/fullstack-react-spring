import React from 'react'


export const Register =() => {

    return(

        <form onSubmit={event => event.preventDefault() }>

            <label htmlFor="register-username">UserName</label>
            <input type="text" name="register-username" id="register-username"/>
            <label htmlFor="register-password"> Password</label>
            <input type="text" name ="register-password" id="register-password"/>
            <label htmlFor="repeat-password"> Repeat Password</label>
            <input type="text" name ="repeat-password" id="repeat-password"/>
            <button> Register</button>
        </form>
    )


}