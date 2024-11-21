import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
// import { User } from './interfaces/user.interface';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  // 의존성 주입 - 디자인 패턴
  constructor(private userService: UserService) {}

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
