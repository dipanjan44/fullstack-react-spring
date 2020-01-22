import React , {Component} from 'react'
import FirstComponent from './components/MyReactAppComponents/FirstComponent'
import SecondComponent from './components/MyReactAppComponents/SecondComponet'
import CounterComponent from './components/SimpleCounter/Counter'
import './App.css'


class myReactApp extends Component{

  render() {

    return(

        <div>
           <CounterComponent incrementfactor={1}/>
           <CounterComponent incrementfactor={100}/>
           <CounterComponent incrementfactor={1000}/>
        </div>


    );
  }
}

function BasicComponent() {

    return(
        <div>
            <p>Hello Dipanjan</p>
            <FirstComponent/>
            <SecondComponent/>
        </div>
    );

}

export default myReactApp

