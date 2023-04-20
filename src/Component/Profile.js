import { useState } from "react"

       // for only two Condition if  else
// function Profile(){
//     const[LoggedIn , SetLoggedIn]=useState(false);
//                      //true means looged in and false means not logged in
//     return(
//         <div>
//             {/* if else Condition  */}
//             {LoggedIn?<h1>Welcome Akshay</h1> : <h1> welcome Guest</h1>}
//         </div>
//     )
// }

       // For More Than Two Condition if elseif condition
       
function Profile(){
    const[userLoggedIn , uSetLoggedIn]=useState(2);
    // let userLoggedIn = 3; it will also work 
    return(
        <div>
            {userLoggedIn==1?<h1>User 1 Logged in</h1> :
            userLoggedIn==2?<h1>User 2 Logged in</h1>:
            <h1>User 3 Logged in</h1>}
        </div>
    )
}
export default Profile;