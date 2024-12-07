import React from "react";

export const ColorSwatch: React.FC = () => {
  const color = {
    type: "rgb",
    red: 126,
    green: 9,
    blue: 41,
  };

  const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

  return (
    <div>
      <div
        style={{
          backgroundColor: rgbColor,
          width: "200px",
          height: "200px",
          borderRadius: "8px",
        }}
      ></div>
      <p>Color Type: {color.type}</p>
      <p>RGB: {rgbColor}</p>
    </div>
  );
};
