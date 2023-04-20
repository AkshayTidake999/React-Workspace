import './HandleForm.css';
import {useState} from 'react';

function HandleForm(){

    const[name , setName] = useState("");
    const[selopt , setSelOpt] = useState("");
    const[term , setTerm] = useState(false);


    function getData(e){
        console.log(name,selopt,term);
        e.preventDefault();
    }
    return(
        <div>
            <form onSubmit={getData}>
                <input onChange={(e)=>setName(e.target.value)} className="username" placeholder="Enter Name Here"/><br></br>
                <select onChange={(e)=>setSelOpt(e.target.value)}>
                    <option>select one option</option>
                    <option>Cricket</option>
                    <option>Football</option>
                    <option>Hockey</option>
                </select><br></br>
                <input onChange={(e)=>setTerm(e.target.checked)} type="checkbox"></input>
                <span>  Accept Term And Condition</span><br></br>
                <button>Submit</button>
            </form>
        </div>
    )

}
export default HandleForm;