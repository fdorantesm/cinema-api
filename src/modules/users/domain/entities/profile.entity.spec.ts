import { ProfileEntity } from '@/modules/users/domain/entities/profile.entity';
import type { Profile } from '@/modules/users/domain/interfaces/profile.interface';

describe('ProfileEntity', () => {
  it('should create a profile entity', () => {
    const profile: Profile = {
      uuid: '',
      name: 'John',
      surname: 'Doe',
      userId: '',
    };

    const profileEntity = ProfileEntity.create(profile);

    expect(profileEntity.getName()).toEqual(profile.name);
    expect(profileEntity.getSurname()).toEqual(profile.surname);
    expect(profileEntity.getUserId()).toEqual(profile.userId);
  });

  it('should convert profile entity to object', () => {
    const profile: Profile = {
      uuid: '',
      name: 'John',
      surname: 'Doe',
      userId: '',
    };

    const profileEntity = ProfileEntity.create(profile);
    const profileObject = profileEntity.toJson();

    expect(profileObject.name).toEqual(profile.name);
    expect(profileObject.surname).toEqual(profile.surname);
    expect(profileObject.userId).toEqual(profile.userId);
  });

  it('should convert profile entity to JSON', () => {
    const profile: Profile = {
      uuid: '',
      name: 'John',
      surname: 'Doe',
      userId: '',
    };

    const profileEntity = ProfileEntity.create(profile);
    const profileJson = profileEntity.toJson();

    expect(profileJson.name).toEqual(profile.name);
    expect(profileJson.surname).toEqual(profile.surname);
    expect(profileJson.userId).toEqual(profile.userId);
  });
});
