import React , {Component} from 'react'

export default class DecrementCounterButton extends Component {

    constructor(){

        super();
        this.decrementCounter=this.decrementCounter.bind(this)

    }

    render() {

        return(
            <div>
                <button onClick={this.decrementCounter}> -{this.props.by} </button>
            </div>
        )
    }

    decrementCounter(){
        this.props.decrementBy(this.props.by)
    }


}
