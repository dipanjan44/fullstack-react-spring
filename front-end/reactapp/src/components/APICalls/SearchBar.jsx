import React from 'react'


export default class SearchBar extends React.Component {

    state = {
        term:''
    }


    handleFormSubmit=(event) =>
    {
        event.preventDefault()
        console.log(this.state.term)
        this.props.onsubmit(this.state.term)


    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type='text'
                        value={this.state.term}
                        onChange={(event)=>{this.setState( {term:event.target.value})}}/>
                </form>
            </div>

        )
    }


}