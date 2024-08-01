import { Injectable, Logger } from '@nestjs/common';

import type { Executable } from '@/core/domain/executable.interface';
import type { Context } from '@/core/domain/interfaces/context.interface';
import { AuditoriumsService } from '@/modules/auditoriums/domain/contracts/auditoriums.service.contract';
import { InjectService } from '@/core/application/inject-service.decorator';

@Injectable()
export class ListAuditoriumsUseCase implements Executable {
  constructor(
    @InjectService('AUDITORIUMS_SERVICE')
    private readonly auditoriumsService: AuditoriumsService,
  ) {}

  public async execute(ctx: Context, filter, options) {
    Logger.log('ListAuditoriumsUseCase executing...', ctx.requestId);
    const result = await this.auditoriumsService.paginate(filter, options);
    return {
      ...result,
      docs: result.docs.map((doc) => doc.toJson()),
    };
  }
}
