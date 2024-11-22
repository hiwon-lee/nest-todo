import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  // Prisma를 사용하여 데이터베이스의 Todo 테이블에서 특정 조건에 해당하는 단일 Todo 항목을 가져오는 메서드
  async todo(
    todoWhereUniqueInput: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo | null> {
    console.log(todoWhereUniqueInput);

    return this.prisma.todo.findUnique({
      where: todoWhereUniqueInput,
    });
  }
  async getAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async updateTodo(id: number, isCompleted: boolean): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id }, // 고유 필드로 항목 찾기
      data: { isCompleted }, // 업데이트할 필드
    });
  }

  async deleteTodo(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
