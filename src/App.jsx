import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("white");
  const [colorMode, setColorMode] = useState("simple");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "hex" ? "simple" : "hex"));
  };

  const changeColor = () => {
    // Define an array of simple colors and hex colors.
    const simpleColors = [ "White", "Red", "Green", "Blue", "Chocolate", "Pink", "Yellow", "Indigo", "Violet", "Lime", "Orange", "Brown", "Grey", "Cream", "Purple"];

    const hexColors = [ "#FFFFFF", "#FF5733", "#33FF57", "#5733FF","#4AAFD5", "#91B187", "#E7A339", " #678CEC", "#D49BAE", "#BBCB50", "#3B5BA5"," #E87A5D", "#F3B941", "#EDCBD2"," #80C4B7", "#E3856B", "#C7395F", "#DED4E8", "#E8BA40", "#F9EC7E", "#E3CCB2", "#E26274", "#B2456E"," #FBEAE7", "#552619", "#EDF4F2", "#7C8363", "#31473A", "#CADCFC"," #8AB6F9", "#00246B", "#D3CAE2"," #E6C17A", "#F6EDE3", "#404041", "#D5CAE4","#E1E5EB", "#E59462", "#81CAD6", "#EDCD44", "#DC3E26", "#E17888", "#AE3B8B", "#1C5789", "#341514", "#3988A4"," #67C2D4"," #D0944D", "#CB625F", "#1D71BA", "#EDC400", "#B25690", "#71B379", "#D4B8B1", "#866C69", "#CD8C8C", "#53331F", "#CEE6F2", "#E9B796", "#E3867D", "#962E2A", "#EECCD3", "#80C4B7", "#EEC95C", "#E3856B", "#B6E696", "#A95EA3"," #DC3A79", "#1686CD"];

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
