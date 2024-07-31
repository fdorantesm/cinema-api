import { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';

export interface User extends ResourceProps {
  uuid: string;
  email: string;
  username: string;
  phone: string;
  password: string;
  roles: string[];
  profileId?: string;
}
