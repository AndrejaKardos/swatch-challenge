import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorsModule } from './colors/colors.module';

@Module({
  imports: [ColorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
