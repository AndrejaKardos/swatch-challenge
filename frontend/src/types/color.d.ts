export interface RGBColor {
  type: string;
  red: number;
  green: number;
  blue: number;
}

export interface HSLColor {
  type: string;
  hue: number;
  saturation: number;
  lightness: number;
}

export type Color = RGBColor | HSLColor;
