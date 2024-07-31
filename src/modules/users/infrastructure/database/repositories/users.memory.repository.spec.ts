import { Test, TestingModule } from '@nestjs/testing';

import { User } from '@/modules/users/domain/interfaces/user.interface';
import { UsersMemoryRepository } from '@/modules/users/infrastructure/database/repositories/users.memory.repository';

describe('UsersMemoryRepository', () => {
  let repository: UsersMemoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMemoryRepository],
    }).compile();

    repository = module.get<UsersMemoryRepository>(UsersMemoryRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create a user', async () => {
    const user: User = {
      uuid: '1',
      phone: '1234567890',
      username: 'test',
      email: 'test@example.com',
      password: 'password',
      roles: [],
      isActive: true,
    };

    const createdUser = await repository.create(user);

    expect(createdUser).toBeDefined();
    expect(createdUser.uuid).toEqual(user.uuid);
    expect(createdUser.getEmail()).toEqual(user.email);
  });

  it('should find a user by email', async () => {
    const user: User = {
      uuid: '1',
      email: 'test@example.com',
      phone: '1234567890',
      username: 'test',
      password: 'password',
      roles: [],
      isActive: true,
      isDeleted: false,
    };

    await repository.create(user);
    const foundUser = await repository.findOne({ email: user.email });
    expect(foundUser).toBeDefined();
    expect(foundUser.uuid).toEqual(user.uuid);
    expect(foundUser.getEmail()).toEqual(user.email);
  });

  it('should delete a user', async () => {
    const user: User = {
      uuid: '1',
      email: 'test@example.com',
      phone: '1234567890',
      username: 'test',
      password: 'password',
      roles: [],
      isActive: true,
    };

    await repository.create(user);
    await repository.delete({ uuid: user.uuid });
    const foundUser = await repository.findOne({ uuid: user.uuid });
    expect(foundUser).toBeUndefined();
  });
});
