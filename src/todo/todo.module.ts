import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule], // PrismaModule 추가
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
