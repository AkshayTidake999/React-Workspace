import './ClickEvents.css'

function ClickButton(){
    let data ="John"
    function Alert(){
        alert(data+" Alert Called Here.......");
    }

   
    return(
        <div>
        <h1>Click Events</h1>
        <button onClick={Alert}>Click Here..</button>
        </div>
    )
}
export default ClickButton;