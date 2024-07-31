import { ICommand } from '@nestjs/cqrs';

import { User } from '@/modules/users/domain/interfaces/user.interface';

export class RegisterCommand implements ICommand {
  constructor(public readonly user: User) {}
}
