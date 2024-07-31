import { PartialType } from '@nestjs/swagger';

import { CreateUserDto } from '@/modules/users/infrastructure/http/dtos/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
