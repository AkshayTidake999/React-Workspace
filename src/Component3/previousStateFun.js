import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function getCounter() {
    let ranNum = Math.floor(Math.random() * 100);
    setCount((pre) => {
      console.log("Previous State : ", pre);
      if (pre - ranNum > 20) {
        alert("There are 20 Diffrnce");
      }
      return ranNum;
    });
  }
  return (
    <>
      <h1>Previous State</h1>
      <h2>Count :{count} </h2>
      {console.log("Current State : ", count)}
      <button onClick={getCounter}>Update Data</button>
    </>
  );
}
export default App;
