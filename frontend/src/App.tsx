import { useState } from "react";
import "./App.css";
import { ColorSwatch } from "./components/colorSwatch";
import { Color } from "./types/color";
import { fetchColorSwatches } from "./apis/colorsApi";

function App() {
  const [colorSwatches, setColorSwatches] = useState<Color[]>([]);

  const handleFetchColors = async () => {
    try {
      const colors = await fetchColorSwatches();
      setColorSwatches(colors);
    } catch (err) {
      console.log("Failed to fetch color swatches. Please try again.");
    }
  };

  return (
    <div>
      <h2>Color Swatches</h2>
      <div
        className="color-swatches-container"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {colorSwatches.map((color, index) => (
          <ColorSwatch key={index} color={color} />
        ))}
      </div>

      <button onClick={handleFetchColors}>Fetch Colors</button>
    </div>
  );
}

export default App;
