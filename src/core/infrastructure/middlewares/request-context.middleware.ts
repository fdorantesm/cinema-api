import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';

import type { Context } from '@/core/domain/interfaces/context.interface';
import type { ExtendedRequest } from '@/core/infrastructure/types/http/extended-request.type';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  public use(req: ExtendedRequest, _res: Response, next: NextFunction) {
    const requestId = Math.random().toString(36).substring(2, 15);

    const xForwardedFor = req.headers['x-forwarded-for'];

    const ip = Array.isArray(xForwardedFor)
      ? xForwardedFor.at(0)
      : xForwardedFor?.split(',')?.at(0)
        ? xForwardedFor.split(',')?.at(0)
        : req.socket.remoteAddress || '';

    const { userId, issuedAt, expiresAt, scopes } = req.credentials || {};

    const context: Context = {
      requestId,
      userId,
      issuedAt,
      expiresAt,
      scopes,
      ip,
    };

    req.context = context;

    return next();
  }
}
