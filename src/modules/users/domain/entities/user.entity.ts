import type { Timestamps } from '@/core/domain/interfaces/timestamps.interface';
import { ResourceEntity } from '@/core/domain/resource-entity';
import { User } from '@/modules/users/domain/interfaces/user.interface';

export class UserEntity extends ResourceEntity<User> {
  public constructor(user: User) {
    super(user);
  }

  public static create(user: User): UserEntity {
    return new UserEntity(user);
  }

  public getEmail(): string {
    return this._props.email;
  }

  public getPassword(): string | undefined {
    return this._props.password;
  }

  public getRoles(): string[] {
    return this._props.roles;
  }

  public getProfileId(): string {
    return this._props.profileId;
  }

  public addRole(role: string): void {
    this._props.roles.push(role);
  }

  public getUsername(): string {
    return this._props.username;
  }

  public getPhone(): string {
    return this._props.phone;
  }

  public toJson(): User & Timestamps {
    return {
      uuid: this.getUuid(),
      email: this.getEmail(),
      username: this.getUsername(),
      phone: this.getPhone(),
      password: this.getPassword(),
      roles: this.getRoles(),
      profileId: this.getProfileId(),
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      isActive: this._isActive,
    };
  }
}
