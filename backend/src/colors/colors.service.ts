import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorsService {
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateRandomColorTypes(
    colorTypes: string[],
    numberOfColors: number,
  ): string[] {
    return [...Array(numberOfColors)].map(
      () => colorTypes[Math.floor(Math.random() * colorTypes.length)],
    );
  }

  private generateColor(type: string) {
    switch (type.toLowerCase()) {
      case 'rgb':
        return {
          type: 'rgb',
          red: this.getRandomNumber(0, 255),
          green: this.getRandomNumber(0, 255),
          blue: this.getRandomNumber(0, 255),
        };
      case 'hsl':
        return {
          type: 'hsl',
          hue: this.getRandomNumber(0, 360),
          saturation: this.getRandomNumber(0, 100),
          lightness: this.getRandomNumber(0, 100),
        };
      default:
        return;
    }
  }

  generateColorSet(colorTypes: string[], numberOfColors: number) {
    if (!Array.isArray(colorTypes) || colorTypes.length === 0) {
      throw new Error('colorTypes must be a non-empty array.');
    }
    if (numberOfColors <= 0) {
      throw new Error('numberOfColors must be greater than 0.');
    }

    const randomColors = this.generateRandomColorTypes(
      colorTypes,
      numberOfColors,
    );

    return randomColors.map((color) => this.generateColor(color));
  }
}
