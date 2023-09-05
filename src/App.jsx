import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("white");
  const [colorMode, setColorMode] = useState("simple");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "hex" ? "simple" : "hex"));
  };

  const changeColor = () => {
    // Define an array of simple colors and hex colors.
    const simpleColors = [ "White", "Red", "Green", "Blue"];
    const hexColors = [ "#FFFFFF", "#FF5733", "#33FF57", "#5733FF"];

    // Get a random index based on the current mode.
    const randomIndex =
    colorMode === "hex"
    ? Math.floor(Math.random() * hexColors.length)
    : Math.floor(Math.random() * simpleColors.length);

// Set the new color based on the current mode.
const newColor =
  colorMode === "hex" ? hexColors[randomIndex] : simpleColors[randomIndex];

setCurrentColor(newColor);
};

  return (
      <div className="color-change" style={{ backgroundColor: currentColor }}>
        <div className="nav-details">
          <h3>COLOR FLIPPER</h3>
          <div className="color-range">
          <a href="#" onClick={toggleColorMode} style={{ marginRight: "8px" }}>
              Simple
            </a>
            <a href="#" onClick={toggleColorMode}>
              Hex
            </a>
          </div>
        </div>
        <div className="color-body" >
        <div className="TheBody" >
            <p>Background Color: {currentColor}</p>
            <button onClick={changeColor}>Change Color</button>
          </div>
        </div>
      </div>
  );
}

export default App;
