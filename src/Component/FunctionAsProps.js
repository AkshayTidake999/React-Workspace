
function FunctionAsProps(props){
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={props.data}>Click for Call</button>
             {/* call Function from App.js  means Parents to child */}
        </div>
    )
}

export default FunctionAsProps;