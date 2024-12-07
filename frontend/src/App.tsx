import { useState } from "react";
import "./App.css";
import { ColorSwatch } from "./components/colorSwatch";
import { Color } from "./types/color";
import { fetchColorSwatches } from "./apis/colorsApi";

function App() {
  const [colorSwatches, setColorSwatches] = useState<Color[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchColors = async () => {
    setLoading(true);
    setError(null);

    try {
      const colors = await fetchColorSwatches();
      setColorSwatches(colors);
    } catch (err) {
      setError("Failed to fetch color swatches. Please try again.");
    } finally {
      setLoading(false);
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

      <div className="button-container">
        <button
          className={"fetch-colors-button"}
          onClick={handleFetchColors}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Colors"}
        </button>

        <div className="loading-container">
          {loading && <p>Loading color swatches...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
