import { useState } from "react"
import './State.css'

function State1(){
    // varibale distructuring 
    let [data , updateData] = useState("Akshay");
//data is initial value and updateData is update value

    function newData(){
         updateData("John");
    }
    
    return( 
        <div>
            <h1>{data}</h1>
            <button onClick={newData}>CLick Here</button>
        </div>
    )
}
export default State1;