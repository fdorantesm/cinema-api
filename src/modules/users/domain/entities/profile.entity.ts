import { Entity } from '@/core/domain/entity';
import { Profile } from '@/modules/users/domain/interfaces/profile.interface';

export class ProfileEntity extends Entity<Profile> {
  constructor(profile: Profile) {
    super(profile);
  }

  public static create(profile: Profile) {
    return new ProfileEntity(profile);
  }

  public getName() {
    return this._props.name;
  }

  public getSurname() {
    return this._props.surname;
  }

  public getDisplayName() {
    return this._props.displayName;
  }

  public getAvatar() {
    return this._props.avatar;
  }

  public getBio() {
    return this._props.bio;
  }

  public getUserId() {
    return this._props.userId;
  }

  public toJson(): Profile {
    return {
      uuid: super.getUuid(),
      name: this.getName(),
      surname: this.getSurname(),
      displayName: this.getDisplayName(),
      avatar: this.getAvatar(),
      bio: this.getBio(),
      userId: this.getUserId(),
    };
  }
}
