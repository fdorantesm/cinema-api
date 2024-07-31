import { RegisterRequestDto } from '@/modules/auth/infrastructure/http/dtos/register-request.dto';

export const registers: RegisterRequestDto[] = [
  {
    email: 'sudo@example.com',
    username: 'sudo',
    password: 'sesame',
    name: 'Sudo',
    surname: 'Su',
    phone: '+525678901234',
    isRecruiter: false,
  },
  {
    email: 'john@example.com',
    username: 'john',
    password: 'sesame',
    name: 'John',
    surname: 'Doe',
    phone: '+525678901235',
    isRecruiter: false,
  },
  {
    email: 'jane@example.com',
    username: 'jane',
    password: 'sesame',
    name: 'Jane',
    surname: 'Doe',
    phone: '+525678901236',
    isRecruiter: true,
  },
];
