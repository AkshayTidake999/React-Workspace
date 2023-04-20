import React from "react"
import './InputDataGet.css'
import { useState } from "react"

 function InputDataGet(){
    const[firstData , updateData] = useState(null);
    const[print , updatePrint] = useState(false);

    function GetInput(val){
        console.log(val.target.value);
        updateData(val.target.value);
    }
    return(
        <div>
            <h1>Hello India</h1>
            <h2>{firstData}</h2>
            <input type="text" onChange={GetInput}/>
            <button onClick={GetInput}>Print Data</button>
        </div>
    )
}
export default InputDataGet;

      // for print data when click  lecture 15
// function InputDataGet(){
//     const[firstData , updateData] = useState(null);
//     const[print , updatePrint] = useState(false);

//     function GetInput(val){
//         console.log(val.target.value);
//         updateData(val.target.value);
//     }
//     return(
//         <div>
//             <h1>Hello India</h1>
//             print?
//             <h2>{firstData}</h2>
//             <input type="text" onChange={GetInput}/>
//             <button onClick={()=>updatePrint(true))>Print Data</button>
//         </div>
//     )
// }
