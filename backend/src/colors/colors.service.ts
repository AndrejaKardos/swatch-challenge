import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorsService {
  generateColorSet() {
    return [
      {
        type: 'rgb',
        red: 0,
        green: 0,
        blue: 0,
      },
      {
        type: 'hsl',
        hue: 120,
        saturation: '100%',
        lightness: '50%',
      },
      {
        type: 'hsl',
        hue: 240,
        saturation: '100%',
        lightness: '50%',
      },

      {
        type: 'rgb',
        red: 255,
        green: 255,
        blue: 255,
      },
      {
        type: 'rgb',
        red: 0,
        green: 0,
        blue: 171,
      },
    ];
  }
}
