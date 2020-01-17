import React , {Component} from 'react'
import FirstComponent from './components/MyReactAppComponents/FirstComponent'
import SecondComponent from './components/MyReactAppComponents/SecondComponet'
import './App.css'


class myReactApp extends Component{

  render() {

    return(
        <div>
            <p>Hello Dipanjan</p>
            <FirstComponent/>
            <SecondComponent/>
        </div>

    );
  }
}

// class FirstComponent extends Component{
//     render()
//     {
//         return (
//             <div>
//                 <p> first Component </p>
//             </div>
//
//         );
//
//
//     }
// }
//
//
// class SecondComponent extends Component{
//     render() {
//
//         return(
//             <div>
//                 <p>Second Component</p>
//             </div>
//         );
//     }
// }
//
// function ThirdComponent(){
//
//     return(
//         <div>
//             <p> Third Component </p>
//         </div>
//     );
// }

export default myReactApp

