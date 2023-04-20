import style from './Style.module.css'
import './StyleType.css'

//                Style Type In React JS
// 1) Use The Normal Stylesheet
// 2) Use With the Variable or Inline Style
// 3) Css with Module 
function StyleType(){
    return(
        <div>
            <h1 className="heading1">Use The Normal Stylesheet</h1>
            <h1 className="heading2" style={{textAlign:"center",color:"white",backgroundColor:"black"}}>Use With the Variable or Inline Style</h1>
            <h1 className={style.heading3}>Css with Module </h1>
        </div>
    )    
}
 
export default StyleType;