import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule], // PrismaModule 추가
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
