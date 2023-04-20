import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";
function App() {
  return (
    <>
      <h2>Route</h2>
      <Router>
        <Link to="/home">Home Page</Link>
        <br />
        <br />
        <Link to="About">About Page</Link>
        <br />
        <br />
        <Link to="*"></Link>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}
function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This Is Home Page of Sample WebSite</p>
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
function PageNotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>404 Page Not Found</p>
    </>
  );
}
export default App;
