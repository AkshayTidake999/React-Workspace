import React, {useEffect} from "react";


function HooksUseEffect(){
    //useEffect take itself function
    //it will take parameter as an function
    useEffect(()=>{
        alert("useEffect Worked......")
    }
    )

    return(
        <div>
            <h1>UseEffect Hooks</h1>
        </div>
    )
}
export default HooksUseEffect;