import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Landing from './components/APICalls/Landing'



const App =()=> {

    return(
        <Landing />
    )
}

ReactDOM.render(
    <App/>,document.getElementById('root')
)