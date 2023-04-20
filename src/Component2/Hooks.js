import { useState } from "react"

// remember to identify Hooks ,, use keywords before any words
function Hooks(){
    const [data , setData] = useState("Akshay")
    return(
        <div>
            <h1> Hooks </h1>
            <h3>Hello I'am {data}</h3>
            <button onClick={()=>setData("Aksh")}>Update Name</button>
        </div>
    )
}
export default Hooks;