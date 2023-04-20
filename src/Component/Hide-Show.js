import { useState } from 'react'
import './Hide-Show.css'
export default function HideAndShow(){
    const [status , updateStatus] = useState(false);
    return(
        <div className='main-container'>
            {
               status?
               <h1>Hello  World</h1>
               :null
            }
            
            {/* <button onClick={()=>updateStatus(false)} className="hide-btn">Hide</button>
            <button onClick={()=>updateStatus(true)} className="show-btn">Show</button> */}
                          
                          {/* both operation perform on single button  */}
            <button onClick={()=>updateStatus(!status)} className="toggle-btn">Toggle</button>
            
        </div>
    )
}