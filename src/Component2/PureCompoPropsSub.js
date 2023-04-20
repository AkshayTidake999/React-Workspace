import { PureComponent } from "react";

class PureCompoPropsSub extends PureComponent{

    render(){
        console.log("Pure Sub Props Component Rerendering Here.....")
        return(
            <div>
                <h1>Pure Component Props Sub </h1>
                <h2>Count  Will be {this.props.count}</h2>
            </div>
        )
    }
}
export default PureCompoPropsSub;