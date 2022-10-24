import React from "react";
import { Link, navLink } from "react-router-dom";

function App() {
  return (
    <main>
      <h2 className="pick">
        <span>P</span>
        <span>I</span>
        <span>C</span>
        <span>K</span>
        <span> </span>
        <span>A</span>
        <span> </span>
        <span>C</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span> </span>
        <span>!</span>
      </h2>
      <div>Color picker</div>
      <div className="more-colors">
        <button className="white-mode">CREATE NEW COLOR</button>
      </div>
    </main>
  );
}

export default App;
