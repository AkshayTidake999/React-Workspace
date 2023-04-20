// import User from './Component/User'
// import UserClass from './Component/UserClass';
// import WithoutJsx from './Component/WithoutJsx';
// import ClickButton from './Component/ClickEvents'
// import State1 from './Component/State'
// import State from'./Component/StateInClass.js'
// import StudentProps from './Component/StudentProps';
// import School from './Component/ClassProps';
// import InputDataGet from './Component/InputDataGet';
// import HideAndShow from './Component/Hide-Show';
//  import HandleForm from './Component/HandleForm';
// import Profile from './Component/Profile'
// import FormValidation from './Component/FormValidation'
// import FunctionAsProps from "./Component/FunctionAsProps";
// import FunctionAsProps2 from "./Component/FunctionAsProps2";



// import ConstructorLifeCycle from "./Component2/ConstructorLifeCycle";
// import RenderLifeCycleMethod from "./Component2/RenderLifeCycleMethod";
// import DidMounting from "./Component2/DidMounting";
// import DidUpdate  from "./Component2/DidUpdate";
// import ShouldUpdate from "./Component2/ShouldUpdate";

// import Hooks from "./Component2/Hooks.js";
// import HooksUseEffect from "./Component2/HooksUseEffect";
// import HooksUseEffectCondition from "./Component2/HooksUseEffectCondition";
// import HooksUseEffectCondition from "./Component2/HooksUseEffectCondition";
// import HooksCondtion2 from "./Component2/HooksUseEffectCondition2";
// import HooksUseEffectCondition2 from "./Component2/HooksUseEffectCondition2";
// import StyleType from './Component2/StyleType'

// import UseBootstrap from "./Component2/UseBootstrap";

// import ArrayListingWithMap from './Component2/ArrayListingWithMap'
// import ArrayListingWithMap2 from "./Component2/ArrayListingWithMap2";
// import ListWithBootstrap from "./Component2/ListWithBootstrap";
// import NastedList from "./Component2/NastedList";

// import Child1 from "./Component2/Child1";
// import Parent1 from "./Component2/Parent1";

// import PureCompo from "./Component2/PureCompo";
// import PureCompoPropsMain from "./Component2/PureCompoPropsMain";
import Pract from './Component3/Pract'

function App() {
  function GetData(){
    alert("Call From App")  // suppose now i want to call same function in diffrent 
                           // component then just pass props and call this function
                           //check it FunctionAsProps2.js
  }
  return (
    
    <div>
      
      <h1>App.js Called Here</h1>
      {/* <User/> 
      <UserClass/> */}
      {/* <WithoutJsx/>
      <ClickButton></ClickButton> */}
      {/* <State1/> */}
      {/* <State></State> */}
       {/* <h1>Student Component</h1> */}
      {/* <StudentProps name={firstName} />    props means parameter pass */}
      {/* <StudentProps name="John" emailId = "johnD9987@yahoo.com"/> */}
      {/* <School firstName = "Vikky " lastName="Tidake" emailId="vikky19@softdev.com"/> */}
      {/* <InputDataGet/> */}
      {/* <HideAndShow/> */}
      {/* <HandleForm/> */}
      {/* <Profile/> */} 
      {/* <FormValidation/> */}
      {/* <FunctionAsProps data={GetData}/>
      <div>
        <FunctionAsProps2 data={GetData}/>
      </div> */}
      {/* <ConstructorLifeCycle/> */}
      {/* <RenderLifeCycleMethod/> */}
      {/* <DidMounting/> */}
      {/* <DidUpdate/> */}
      {/* <ShouldUpdate/> */}
      {/* <Hooks/> */}
      {/* <HooksUseEffect/> */}
      {/* <HooksUseEffectCondition/> */}
      {/* <HooksCondtion2 data1={data1} count1={count1}></HooksCondtion2> */}
      {/* <StyleType/> */}
      {/* <UseBootstrap/> */}
      {/* <ArrayListingWithMap/> */}
      {/* <ArrayListingWithMap2/> */}
      {/* <ListWithBootstrap/> */}
      {/* <NastedList/> */}
      {/* <Child1/> */}
      {/* <Parent1/> */}

      {/* <PureCompo/> */}
      {/* <PureCompoPropsMain/> */}
      <Pract />



    </div>
  );
}

export default App;
