import React , {useEffect , useState} from "react"

        // For State

function HooksUseEffectCondition(){
    const[data , setData] = useState(10);
    const[count , setCount] = useState(100);

    useEffect(()=>{
        console.log("UseEffect Called Here")
    }, [count])    // check console update state
    return(
        <div>
            <h1>UseEffect Condition </h1>
            <h2>Data {data}</h2>
            <h2>Count {count}</h2>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    )
}

export default HooksUseEffectCondition;