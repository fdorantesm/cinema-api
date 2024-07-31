import { UserEntity } from '@/modules/users/domain/entities/user.entity';
import { User } from '@/modules/users/domain/interfaces/user.interface';

describe('UserEntity', () => {
  it('should create a user entity', () => {
    const user: User = {
      uuid: '123',
      phone: '1234567890',
      username: 'test',
      email: 'test@example.com',
      password: 'password123',
      roles: [],
      isActive: true,
    };

    const userEntity = UserEntity.create(user);

    expect(userEntity.uuid).toEqual(user.uuid);
    expect(userEntity.getEmail()).toEqual(user.email);
    expect(userEntity.getPassword()).toEqual(user.password);
    expect(userEntity.getRoles()).toEqual(user.roles);
    expect(userEntity.isActive).toEqual(user.isActive);
  });

  it('should convert user entity to object', () => {
    const user: User = {
      uuid: '123',
      phone: '1234567890',
      username: 'test',
      email: 'test@example.com',
      password: 'password123',
      roles: [],
      isActive: true,
    };

    const userEntity = UserEntity.create(user);
    const userObject = userEntity.toJson();

    expect(userObject.uuid).toEqual(user.uuid);
    expect(userObject.email).toEqual(user.email);
    expect(userObject.password).toEqual(user.password);
    expect(userObject.roles).toEqual(user.roles);
    expect(userObject.profileId).toEqual(user.profileId);
    expect(userObject.isActive).toEqual(user.isActive);
  });

  it('should convert user entity to JSON', () => {
    const user: User = {
      uuid: '123',
      phone: '1234567890',
      username: 'test',
      email: 'test@example.com',
      password: 'password123',
      roles: [],
      isActive: true,
    };

    const userEntity = UserEntity.create(user);
    const userJson = userEntity.toJson();

    expect(userJson.uuid).toEqual(user.uuid);
    expect(userJson.email).toEqual(user.email);
    expect(userJson.password).toEqual(user.password);
    expect(userJson.roles).toEqual(user.roles);
    expect(userJson.profileId).toEqual(user.profileId);
    expect(userJson.isActive).toEqual(user.isActive);
  });
});
