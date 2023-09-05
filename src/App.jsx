import { useState } from "react";

function App() {
  return (
    <>
      <div className="color-change">
        <div className="nav-details">
          <h3>COLOR FLIPPER</h3>
          <div className="color-range">
            <a href="#" style={{ marginRight: "8px" }}>
              
              Simple
            </a>
            <a href="#"> Hex </a>
          </div>
        </div>
        <div className="color-body">
          <div className="TheBody">
            <p>Background Color : Black</p>

            <button>Change Color</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
