import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './cats/app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
