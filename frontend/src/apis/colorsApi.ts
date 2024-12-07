import axios from "axios";
import { Color } from "../types/color";

const COLORS_ENDPOINT = "http://localhost:3000/colors";

export async function fetchColorSwatches(
  colorTypes: string[] = ["rgb", "hsl"],
  numberOfColors: number = 5
): Promise<Color[]> {
  try {
    const response = await axios.get(COLORS_ENDPOINT, {
      params: {
        colorTypes: colorTypes.join(","),
        numberOfColors,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
