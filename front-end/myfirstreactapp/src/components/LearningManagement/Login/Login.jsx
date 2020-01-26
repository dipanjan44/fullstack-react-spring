import React, {Component} from 'react'

export default class Login extends Component{

    constructor()
    {
        super()
        this.state = {

            username: 'Amartya',
            password: '',
            welcomemsg: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.showMessage= this.showMessage.bind(this)
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({

            [event.target.name] : event.target.value
        })
    }

    showMessage(){

        this.setState({

            welcomemsg : "Welcome to Amartya learning portal"
        })

    }

    render()
    {
        return(
            <div>
                Username: <input type='text' name='username' defaultValue={this.state.username} onChange={this.handleChange}/>
                Password: <input type='password' name='password' defaultValue={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.showMessage}> Login</button>
                <span> {this.state.welcomemsg}</span>
            </div>
        )
    }
}
