import React, {Component} from 'react'

import './Counter.css'

export default class Counter extends Component {

    constructor(){

        super();
        this.increase=this.increase.bind(this);
        this.state = {

            counter : 0
        }

    }

    render() {
        return (
            <div>
                <button onClick={this.increase} > Button_{this.props.incrementfactor}</button>
                <span> {this.state.counter} </span>
            </div>

        );
    }

    increase(){

        this.setState(
            {
                counter : this.state.counter + this.props.incrementfactor
            }
        )

    }




}

