
  // This Is Child Component
function Parent2(props){
    let firstName = "Akshay"
    return(
        <div>
            <h1>This Is Child Component</h1>
            {/* <button onClick={props.data}> Click Here</button> */}

            <button onClick={()=>props.data(firstName)}>Click Here</button>
        </div>
    )
}
export default Parent2;