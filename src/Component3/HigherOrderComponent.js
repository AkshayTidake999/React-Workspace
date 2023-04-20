import React, { useState } from "react";
import "./styles.css";
function App() {
  return (
    <>
      <h1>Higher Order Component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCYellow cmp={Counter} />
    </>
  );
}

function HOCRed(props) {
  return (
    <>
      <h3 style={{ backgroundColor: "red" }}>
        Red Counter <props.cmp />
      </h3>
    </>
  );
}
const HOCGreen = (props) => {
  return (
    <h3 style={{ backgroundColor: "green" }}>
      Green Counter
      <props.cmp />
    </h3>
  );
};
const HOCYellow = (props) => {
  return (
    <h3 style={{ backgroundColor: "yellow" }}>
      {" "}
      Yellow Counter
      <props.cmp />
    </h3>
  );
};
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  );
}

export default App;
