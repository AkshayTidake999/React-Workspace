import "./styles.css";
import React, { useState } from "react";
export default function App() {
  let [val, setVal] = useState("");
  const [fullName, setFullName] = useState();
  function inputEvent(event) {
    // console.log(event.target.value);
    setVal(event.target.value);
  }

  const onSubmitData = () => {
    setFullName(val);
  };
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <p>Hello, {fullName} </p>
      <input type="text" placeholder="Enter Name Here" onChange={inputEvent} />
      <br />
      <button onClick={onSubmitData}>Submit Data</button>
    </div>
  );
}
