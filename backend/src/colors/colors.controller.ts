import { Controller, Get, Query } from '@nestjs/common';
import { ColorsService } from './colors.service';

@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Get()
  getColors(
    @Query('colorTypes') colorTypes: string[],
    @Query('numberOfColors') numberOfColors: number,
  ) {
    return this.colorsService.generateColorSet(
      colorTypes,
      Number(numberOfColors),
    );
  }
}
