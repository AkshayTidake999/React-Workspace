import { Component } from "react";


class DidUpdate extends Component{
    constructor(){
        super();
        console.log("Constructor Called Here.....")
        //here define state
        this.state={
            firstname:"Akshay"
        }
    }

    componentDidUpdate(){
// ComponentDidUpdate Called only when state and props update 
        console.log("ComponentDidUpdate Called Here....")
    }

    render(){
        console.log("Render Called Here....")
        return(
            <div>
                <h1>Component DId Update</h1>
                <h2>Hello I' am {this.state.firstname}</h2>
                <button onClick={()=>{this.setState({firstname:"Aksh"})}}>Update Data</button>
    {/* here state update means componendDidUpdate called */}
            </div>
        )
    }
}
export default DidUpdate;
