import { HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import type { Json } from '@/core/domain/json';
import { sanitizeJson } from '@/utils/sanitize-json';
import type { ExtendedRequest } from '@/core/infrastructure/types/http/extended-request.type';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  public use(req: ExtendedRequest, res: Response, next: NextFunction) {
    const { method, path, query, cookies, body, headers } = req;
    const { context } = req;
    const { requestId } = context;

    const start = Date.now();
    const oldWrite = res.write;
    const oldEnd = res.end;
    const chunks = [];

    res.write = (...args: any[]): any => {
      chunks.push(Buffer.from(args[0]));
      oldWrite.apply(res, args);
    };

    res.end = (...args: any[]): any => {
      if (args[0]) {
        chunks.push(Buffer.from(args[0]));
      }
      oldEnd.apply(res, args);
    };

    res.on('finish', () => {
      const duration = Date.now() - start;
      const contentLength = Number(res.get('Content-Length') || 0);
      const status = res.statusCode;
      this.log(
        {
          type: 'Response',
          requestId,
          status,
          statusMessage: res.statusMessage,
          duration: `${duration} ms`,
          contentLength: `${contentLength} B`,
          data:
            status === HttpStatus.PARTIAL_CONTENT
              ? '<Buffer>'
              : status === HttpStatus.NO_CONTENT
                ? '<Empty>'
                : '<JSON>',
        },
        requestId,
      );
    });

    this.log(
      {
        type: 'Request',
        requestId,
        method,
        path,
        context,
        headers,
        query,
        cookies,
        body,
      },
      requestId,
    );

    return next();
  }

  private log(data: Json, context: string) {
    const { nodeEnv } = this.configService.get('environment');
    const body = sanitizeJson(data);

    if (nodeEnv === 'production') {
    } else {
      Logger.log(body, context);
    }
  }
}
