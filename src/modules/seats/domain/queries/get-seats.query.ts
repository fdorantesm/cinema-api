import type { IQuery } from '@nestjs/cqrs';

import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';

export class GetSeatsQuery implements IQuery {
  constructor(public readonly filter: Partial<Seat>) {}
}
