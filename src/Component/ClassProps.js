import React , { Component } from "react";


class School extends Component{
    render(){
        console.log(this.props.name)
        return(
            <div>
            <h1>Props In Class Component</h1>
            <h2>{this.props.firstName}</h2>
            <h2>{this.props.lastName}</h2>
            <h2>{this.props.emailId}</h2>
            </div>
        )
    }
}
export default School;