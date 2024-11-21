import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  // 의존성 주입 - 디자인 패턴
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    // return 'This action adds a new cat';
    this.catsService.create(createCatDto);
  }

  //   @Get()
  //   findAll(@Query() query: ListAllEntities) {
  //     return `This action returns all cats (limit: ${query.limit} items)`;
  //   }

  //   @Get()
  //   findAll(@Res() res: Response) {
  //     res.status(HttpStatus.OK).json([]);
  //   }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //     return `This action updates a #${id} cat`;
  //   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
