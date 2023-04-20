import Child2 from './Child2'

       // This Is Parent Component
      // Send Data From Parent to Child component

function Child1(){

    let data = "Akshay"
    return(
        <div>
            <h1>Main Child</h1>
            <Child2 firstName={data}/>
        </div>
    )
}

export default Child1;