import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { RegisterCommand } from '@/modules/users/domain/commands/register/register.command';
import {
  USERS_SERVICE,
  UsersService,
} from '@/modules/users/domain/contracts/users.service.contract';
import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { UserCreatedEvent } from '@/modules/users/domain/events/user-created/user-created.event';
import { InjectService } from '@/core/application/inject-service.decorator';

@CommandHandler(RegisterCommand)
export class RegisterCommandHandler implements ICommandHandler {
  constructor(
    @InjectService(USERS_SERVICE)
    private readonly usersService: UsersService,
    private readonly eventBus: EventBus,
  ) {}

  public async execute(command: RegisterCommand): Promise<UserEntity> {
    const user = await this.usersService.register(command.user);
    this.eventBus.publish(new UserCreatedEvent(user));
    return user;
  }
}
