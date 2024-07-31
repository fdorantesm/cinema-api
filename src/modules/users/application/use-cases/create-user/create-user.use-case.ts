import { ConflictException, Inject, Logger } from '@nestjs/common';

import { Context } from '@/core/domain/interfaces/context.interface';
import {
  USERS_SERVICE,
  UsersService,
} from '@/modules/users/domain/contracts/users.service.contract';
import { User } from '@/modules/users/domain/interfaces/user.interface';
import type { Executable } from '@/core/domain/executable.interface';
import { UseCase } from '@/core/application/case.decorator';

@UseCase()
export class CreateUserUseCase implements Executable {
  constructor(
    @Inject(USERS_SERVICE)
    private readonly usersService: UsersService,
  ) {}
  public async execute(ctx: Context, payload: Partial<User>): Promise<User> {
    Logger.log(`Creating user with email: ${payload.email}`, ctx.requestId);

    const previousUser = await this.usersService.count({ email: payload.email });

    if (previousUser) {
      throw new ConflictException('api.users.email_already_exists');
    }

    const user = await this.usersService.register({
      email: payload.email,
      username: payload.username,
      phone: payload.phone,
      password: payload.password,
      roles: payload.roles,
      isActive: payload.isActive || true,
    });

    return user.toJson();
  }
}
