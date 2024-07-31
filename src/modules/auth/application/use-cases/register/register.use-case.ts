import { ConflictException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { Context } from '@/core/domain/interfaces/context.interface';
import { TokenService } from '@/modules/auth/application/services/token.service';
import { Token } from '@/modules/auth/domain/interfaces/token.interface';
import { RoleEntity } from '@/modules/roles/domain/entities/role.entity';
import { GetRolesQuery } from '@/modules/roles/domain/queries';
import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { Roles } from '@/modules/users/domain/enums/role.enum';
import { User } from '@/modules/users/domain/interfaces/user.interface';
import { FindUserQuery, HeadUserQuery } from '@/modules/users/domain/queries';
import { UseCase } from '@/core/application/case.decorator';
import type { Executable } from '@/core/domain/executable.interface';
import { RegisterCommand } from '@/modules/users/domain/commands/register/register.command';
import { ProfileEntity } from '@/modules/users/domain/entities/profile.entity';
import { CreateProfileCommand } from '@/modules/users/domain/commands/register/create-profile.command';
import type { Profile } from '@/modules/users/domain/interfaces/profile.interface';
import { UuidService } from 'nestjs-uuid';

@UseCase()
export class RegisterUseCase implements Executable {
  constructor(
    private readonly uuidService: UuidService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly tokenService: TokenService,
  ) {}

  public async execute(
    ctx: Context,
    payload: Omit<User, 'uuid' | 'roles' | 'isActive'> & {
      profile: Omit<Profile, 'uuid' | 'userId'>;
    },
    isRecruiter?: boolean,
  ): Promise<{ user: User } & Token> {
    const isNotFirst = await this.queryBus.execute<FindUserQuery, UserEntity>(
      new FindUserQuery(),
    );

    const userExists = await this.queryBus.execute<HeadUserQuery, UserEntity>(
      new HeadUserQuery({
        email: payload.email,
      }),
    );

    if (userExists) {
      throw new ConflictException('api.users.email_already_exists');
    }

    const roles = await this.queryBus.execute<GetRolesQuery, RoleEntity[]>(new GetRolesQuery());

    const sudoerRole = roles.find((role) => role.code === Roles.SUDOER);
    const adminRole = roles.find((role) => role.code === Roles.ADMIN);
    const userRole = roles.find((role) => role.code === Roles.USER);
    const recruiterRole = roles.find((role) => role.code === Roles.RECRUITER);

    const subscriberRoles = [userRole.getUuid()];
    const recruiterRoles = [recruiterRole.getUuid()];
    const sudoerRoles = [
      ...recruiterRoles,
      ...subscriberRoles,
      sudoerRole.getUuid(),
      adminRole.getUuid(),
      recruiterRole.getUuid(),
    ];

    const userRoles = isNotFirst
      ? isRecruiter
        ? recruiterRoles
        : subscriberRoles
      : sudoerRoles;

    const formatedEmail = payload.email.toLowerCase();

    const profileId = this.uuidService.generate();
    const userId = this.uuidService.generate();

    await this.commandBus.execute<CreateProfileCommand, ProfileEntity>(
      new CreateProfileCommand({
        ...payload.profile,
        uuid: profileId,
        userId,
      }),
    );

    const user = await this.commandBus.execute<RegisterCommand, UserEntity>(
      new RegisterCommand({
        uuid: userId,
        username: payload.username,
        email: formatedEmail,
        password: payload.password,
        phone: payload.phone,
        roles: userRoles,
        isActive: true,
        profileId,
      }),
    );

    const token = await this.tokenService.create({
      uuid: user.uuid,
      roles: user.getRoles(),
    });

    return {
      ...token,
      user: user.toJson(),
    };
  }
}
