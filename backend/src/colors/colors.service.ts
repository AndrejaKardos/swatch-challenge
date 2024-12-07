import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorsService {
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateRandomColorType(setOfColorTypes: string[]) {
    return setOfColorTypes[Math.floor(Math.random() * setOfColorTypes.length)];
  }

  private generateColor(type: string) {
    switch (type) {
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

  generateColorSet(colorTypes: string[] = ['rgb', 'hsl']) {
    const randomColorType = this.generateRandomColorType(colorTypes);

    return this.generateColor(randomColorType);
  }
}
