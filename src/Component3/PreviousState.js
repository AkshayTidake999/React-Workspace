import React, { useState } from "react";
import "./styles.css";
function App() {
  const [count, setCount] = useState(0);
  function counter() {
    let ranNumber = Math.floor(Math.random() * 100);
    // console.log("Random Number : " + ranNumber);
    // setCount take one Callback function
    setCount((pre) => {
      console.log("Previous Number : ", pre);
      if (pre - ranNumber > 30) {
        alert("previous and current value Diff is grater than 30");
      }
      return ranNumber;
    });
  }
  return (
    <>
      <h1>Previous State {count} </h1>
      <button onClick={counter}>Updatae Count</button>
    </>
  );
}
export default App;
 