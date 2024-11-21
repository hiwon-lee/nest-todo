import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { userModule } from './user/user.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PostModule, userModule, PrismaModule], // PostModule과 PrismaModule 등록
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
