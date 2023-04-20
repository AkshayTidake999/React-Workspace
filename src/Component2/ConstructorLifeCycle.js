import {Component} from 'react';

class ConstructorLifeCycle extends Component{
    constructor(){  // always constructor call first we can write anywhere
        super();  // super() is used call parent constructor means component class
        console.log("Constructor Call")
        this.state={
            data:"Akshay"
    // here we can define state it will be ready first before html
        }
    }
    render(){
        return(
            <h1>Hello Mr. {this.state.data}</h1>
        )
    }

}
export default ConstructorLifeCycle;