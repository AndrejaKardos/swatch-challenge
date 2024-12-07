import { useState } from "react";
import "./App.css";
import { ColorSwatch } from "./components/colorSwatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Colour Swatches</h2>
        <ColorSwatch />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
