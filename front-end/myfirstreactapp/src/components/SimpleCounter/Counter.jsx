import React, {Component} from 'react'

import './Counter.css'
import IncrementCounterButton from './IncrementCounterButton'
import DecrementCounterButton from "./DecrementCounterButton";

export default class Counter extends Component {

    constructor(){

        super();
        this.increase=this.increase.bind(this);
        this.decrease=this.decrease.bind(this);
        this.state = {

            counter : 0
        }

    }

    render() {
        return (
            <div>
                <IncrementCounterButton by={100} incrementBy={this.increase}/>
                <IncrementCounterButton by={10} incrementBy={this.increase}/>
                <DecrementCounterButton by={20} decrementBy={this.decrease}/>
                <span>{this.state.counter}</span>
            </div>

        );
    }

    increase(incrememtFactor){

        this.setState(
            {
                counter : this.state.counter + incrememtFactor
            }
        )

    }

    decrease(decrementfactor)
    {
        this.setState(
            {
                counter : this.state.counter - decrementfactor
            }
        )
    }


}

