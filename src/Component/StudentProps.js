import react,{ useState } from 'react';
import './StudentProps.css'
function StudentProps(props){
    console.log(props)
    return(
            <div className='data-list'> 
                <h2>{props.name}</h2>
                <h2>{props.emailId}</h2>
            </div>   
    )
}
export default StudentProps;


  // For Update Value Use Here UseState
// function StudentProps(props){
//   const[firstName , updatedata]=useState("Akshay")
  
//     return(
//             <div className='data-list'> 
//                 <h2>{props.name}</h2>
//                 {/* <h2>{props.emailId}</h2> */}
//                 <button onClick={()=>{updatedata("Aksh")}}>Update Name Here</button>
//             </div>   
//     )
// }
// export default StudentProps;
