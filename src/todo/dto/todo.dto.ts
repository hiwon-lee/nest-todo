import { IsNotEmpty, IsOptional, IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  value: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
