import { Request } from 'express';

import type { Context } from '@/core/domain/interfaces/context.interface';
import type { UserRequest } from '@/core/infrastructure/types/http/user-request.type';
import type { Credentials } from '@/modules/auth/domain/types/credentials.type';

export type ExtendedRequest = Request &
  UserRequest & {
    credentials: Credentials;
    requestId: string;
    context: Context;
  };
