import React from "react";
function App() {
  const [data, setData] = React.useState({
    name: "John",
    age: 23,
    city: "Delhi"
  });
  return (
    <>
      <h1>State With Object</h1>

      {/* if we have 2 input field then write like that  setData({ name: data.name, age: e.target.value }); */}
      {/* <input
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => setData({ age: data.age, name: e.target.value })}
      /> */}

       {/* if we have multiple input field then use spread operator  ...data */}
      <input
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Enter Age"
        value={data.age}
        onChange={(e) => {
          setData({ name: data.name, age: e.target.value });
        }}
      />
      <h3>Name : {data.name}</h3>
      <h3>Name : {data.age}</h3>
    </>
  );
}
export default App;
