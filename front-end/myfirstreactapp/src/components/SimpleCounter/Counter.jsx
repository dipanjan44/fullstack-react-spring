import React, {Component} from 'react'

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
                <button onClick={this.increase}> Button</button>
                <span> {this.state.counter} </span>
            </div>

        );
    }

    increase(){

        this.setState(
            {
                counter : this.state.counter + 1
            }
        )

    }


}
