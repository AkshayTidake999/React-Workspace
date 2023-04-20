import { Component } from "react";
import PureCompoPropsSub from './PureCompoPropsSub'

class PureCompoPropsMain extends Component{
    constructor(){
        super();
        this.state={
            count : 1
        }
    }
    render(){
        return(
            <div>
                <PureCompoPropsSub count={this.state.count}/>
                <button onClick={()=>this.setState({count:1})}>Update Count Here...</button>
            </div>
        )
    }
}

export default PureCompoPropsMain