import {Component} from 'react'

// Always First Call Constructor then Render And Then ComponentDidMount 
// Before HTML Ready First Call Constructor After That Render Call And 
// after Complete Ready Html then call ComponentDidMOunt  
// Mostly componentDidMount are Used For Api Called 


class DidMounting extends Component{

    constructor(){
        super();
// if super() not written ThenReferenceError: Must call super constructor in derived
// class before accessing 'this' or returning from derived constructor

        console.log("Constructor Called Here.....")
        this.state={
            name:"Akshay"
        }
    }
    componentDidMount(){
        console.log("Component Did Mount Called Here.....")
    }
    render()
    {
        console.log("Reder Called Here.....")
        return(
            <div>
                <h1>ComponentDidMOunt {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"Tidake"})}}>Update</button>
            </div>
            
        )
    }
}

export default DidMounting;