import React from "react";

interface ColorSwatchProps {
  color: {
    type: string;
    [key: string]: any;
  };
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => {
  const getColorType = (color: { type: string; [key: string]: any }) => {
    switch (color.type.toLowerCase()) {
      case "rgb":
        return `rgb(${color.red}, ${color.green}, ${color.blue})`;
      case "hsl":
        return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;
      default:
        return;
    }
  };

  const formatKey = (key: string) => key.charAt(0).toUpperCase() + key.slice(1);

  const displayColorProperties = Object.entries(color)
    .filter(([key]) => key !== "type")
    .map(([key, value]) => (
      <p key={key}>
        {formatKey(key)}: {value}
      </p>
    ));

  return (
    <div>
      <div
        style={{
          backgroundColor: getColorType(color),
          width: "200px",
          height: "200px",
          borderRadius: "8px",
          margin: "40px 2px",
        }}
      />
      <p>Color Type: {color.type.toUpperCase()}</p>
      {displayColorProperties}
    </div>
  );
};
