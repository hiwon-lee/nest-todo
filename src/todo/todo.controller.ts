import { Controller, Get, Param, Body, Delete, Post } from '@nestjs/common';
import { Todo, Todo as TodoModel } from '@prisma/client';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getTodos(): Promise<TodoModel[]> {
    console.log('hi');
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string): Promise<TodoModel> {
    return this.todoService.todo({ id: Number(id) });
  }

  @Post()
  async createDraft(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    const { value } = createTodoDto;
    console.log(createTodoDto);
    return this.todoService.createTodo({
      value,
      isCompleted: false,
    });
  }

  // @Put(':id/publish')
  // async publishTodo(@Param('id') id: string): Promise<TodoModel> {
  //   return this.todoService.updateTodo({
  //     where: { id: Number(id) },
  //     data: { published: true },
  //   });
  // }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<TodoModel> {
    return this.todoService.deleteTodo(Number(id));
  }
}
