import React, { useState } from 'react'
import bindMethods from "auto-bind";
// PureComponent

// export default class SearchBar extends PC {

//     state = {
//         term: ''
//     }

//     constructor(props) {
//         super(props);
//         bindMethods(this);
//         // this.handleFormSubmit = this.handleFormSubmit.bind(this)
//     }


//     // handleFormSubmit=(event) =>
//     // {
//     //     event.preventDefault()
//     //     console.log(this.state.term)
//     //     this.props.onsubmit(this.state.term)


//     // }

//     handleFormSubmit(event) {
//         event.preventDefault()
//         console.log(this.state.term)
//         this.props.onsubmit(this.state.term)
//     }


//     render() {
//         return (
//             <div>
//                 {/* <form onSubmit={this.handleFormSubmit.bind(this)}> */}
//                 <form onSubmit={this.handleFormSubmit}>
//                     <input
//                         type='text'
//                         value={this.state.term}
//                         onChange={(event) => { this.setState({ term: event.target.value }) }} />
//                 </form>
//             </div>

//         )
//     }


// }


const SearchBar=(props)=>{

    const [searchTerm,setSearchTerm]= useState('')

    const handleFormSubmit=(event) => {
               event.preventDefault()
               console.log({searchTerm})
               props.onsubmit(searchTerm)
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
               <input 
               type='text'
               value={searchTerm}
               onChange={(event)=>{setSearchTerm(event.target.value)}}
               />
            </form>
        </div>
        
    )

}

export default SearchBar