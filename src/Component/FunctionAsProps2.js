
function FunctionAsProps2(props){
    return(
        <div>
            <h1>Child Second Component</h1>
            <button onClick={props.data}> Call From App</button>
        </div>
    )
}
export default FunctionAsProps2;