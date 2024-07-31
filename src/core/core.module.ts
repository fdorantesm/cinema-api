import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { configOptions } from '@/config';
import { HttpExceptionFilter } from '@/core/infrastructure/filters/exception.filter';
import { TransformInterceptor } from '@/core/infrastructure/interceptors/transform.interceptor';
import { JsonLoggerService } from '@/core/infrastructure/logger/json.logger';
import { LoggerMiddleware } from '@/core/infrastructure/middlewares/logger.middleware';
import { RequestContextMiddleware } from '@/core/infrastructure/middlewares/request-context.middleware';

@Module({
  imports: [ConfigModule.forRoot(configOptions)],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: 'LOGGER_SERVICE',
      useValue: JsonLoggerService.getInstance(),
    },
    {
      provide: LoggerMiddleware,
      useClass: LoggerMiddleware,
    },
    {
      provide: RequestContextMiddleware,
      useClass: RequestContextMiddleware,
    },
  ],
})
export class CoreModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware, LoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
