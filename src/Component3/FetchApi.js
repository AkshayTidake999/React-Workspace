import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setData(resp);
      });
    });
  });

  return (
    <>
      <h1>Api Fetch</h1>
      <table border="5">
        <tr style={{ backgroundColor: "yellow" }}>
          <th>ID</th>
          <th>NAME</th>
          <th>E-MAIL</th>
          <th>USERNAME</th>
        </tr>
        {data.map((item) => (
          <tr style={{ backgroundColor: "greenyellow", textAlign: "center" }}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default App;
