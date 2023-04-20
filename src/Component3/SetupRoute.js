import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Link to="/home">Home Page</Link>
        <br />
        <br />
        <Link to="/about">About Page</Link>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}
function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This Is Home Page Of Sample WebSite</p>
    </>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>This Is About Page Of Sample WebSite</p>
    </>
  );
}
export default App;
