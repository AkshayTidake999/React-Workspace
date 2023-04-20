import './FormValidation.css'
import {useState} from 'react'

function FormValidation(){

    const[uName , setuName] = useState("");
    const[uPassword , setuPassword] = useState("");
    const[uNameError , setuNameError] = useState(false);
    const[uPassError , setuPassError] = useState(false);

    function ControlReload(e){        //e events
        e.preventDefault();  //now page is not reload for check comment this code
        if(uName.length<4 || uPassword.length<6){
            alert("Enter Correct UserName And Password In Field")
        }else{
            alert("Confirm Your UserName And Password")
        }
    }
    function UserName_Data(e){
        console.log(e.target.value);
        let userLength = e.target.value;
        if(userLength.length<4){
            setuNameError(true);   
        }else{
            setuNameError(false);
        }
        setuName(userLength);                // for checking blank value provied 
    }
    function UserPass_Data(e){
        let passLength = e.target.value.length;
        if(passLength<6){
            setuPassError(true)
        }else{
            setuPassError(false)
        }
        setuPassword(passLength);
    }

    return(
        <div className="main-container">
            <h1>Login Form</h1>
            <form onSubmit={ControlReload}>
                <input type="text" placeholder="Enter User Name" onChange={UserName_Data}/> <br></br>
                {uNameError ? <span>Enter valid Usnername</span>:""}<br></br><br></br>
                {/* onChange={UserName_Data} are used for user data check  */}

                <input type="password" placeholder="Enter User Password" onChange={UserPass_Data}/><br></br>{uPassError?<span>Enter valid Password</span> :""}<br></br><br></br>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default FormValidation;