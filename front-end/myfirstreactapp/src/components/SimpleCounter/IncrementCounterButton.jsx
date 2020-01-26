import React , {Component} from 'react'

export default class IncrementCounterButton extends Component {

    constructor(){

        super();
        this.incrementCounter=this.incrementCounter.bind(this)

    }

    render() {

        return(
            <div>
                <button onClick={this.incrementCounter}> + {this.props.by} </button>
            </div>
        )
    }

    incrementCounter(){
        this.props.incrementBy(this.props.by)
    }


}
