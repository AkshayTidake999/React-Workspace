import Parent2 from './Parent2'


  // Send Data Parent to Child component
  // This Is parent
function Parent1(){
    function MyAlert(firstName){
        alert("Hello " +firstName);
    }
    return(
        <div>
            <h1> Main Parent </h1>
            <Parent2 data={MyAlert}/>
        </div>
    )
}

export default Parent1;