import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule], // PrismaModule 추가

  controllers: [UserController],
  providers: [UserService],
})
export class userModule {}
