
  // Pure Component Used Inside Class Component not an Functional Component 
  // for Functional component used useMemo Hooks feature
  // its used for Re-rendering means stop repative execution
 import {  mponent} from "react";
// if there will be normal component and value same then that time re-render repative 
//but pure componenet not rerender for same value
  class mpo extends mponent{
    constructor(){
      super();
      this.state = {
        count : 1
      }

    }
    render(){
      console.warn("Render Called....")
      return(
        <div>
          <h1>Pure Component</h1>
          <h2>Hello I' Am {this.state.count}</h2>
          {/* at that time not re-rendering becoz value is same only first time render not repeat */}
          <button onClick={()=>this.setState({count:1})}>Update Data</button>

          {/* but this time re-render becoz value will update when click on button  */}
          {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Data</button> */}

        </div>
      )
    }
  }
  export default mpo;