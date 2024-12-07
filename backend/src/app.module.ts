import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorsModule } from './colors/colors.module';
import { ColorsController } from './colors/colors.controller';
import { ColorsService } from './colors/colors.service';

@Module({
  imports: [ColorsModule],
  controllers: [AppController, ColorsController],
  providers: [AppService, ColorsService],
})
export class AppModule {}
