import { Component } from "react";


class ShouldUpdate extends Component{

    constructor(){
        super();
        console.log("Costructor Called Here.....");
        this.state = {
            count : 0
        }
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate Called Here....")
        return true;  // now update state 
    }

    render()
    {
        console.log("Render Called Here")

        return(
        <div>
            <h1>Should Component Update</h1>
            <h2>Hello Counter Start From {this.state.count} </h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Update Button</button>
        </div>
        )
    }

}
export default ShouldUpdate;