import { QueryBus } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { UseCase } from '@/core/application/case.decorator';
import type { Executable } from '@/core/domain/executable.interface';
import type { Context } from '@/core/domain/interfaces/context.interface';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';
import { GetSeatsQuery } from '@/modules/seats/domain/queries/get-seats.query';

@UseCase()
export class ListSeatsUseCase implements Executable {
  constructor(private readonly queryBus: QueryBus) {}

  public async execute(ctx: Context, filter: Partial<Seat>): Promise<Seat[]> {
    Logger.log('ListSeatsUseCase.execute', ctx.requestId);
    const seats = await this.queryBus.execute(new GetSeatsQuery(filter));
    return seats;
  }
}
