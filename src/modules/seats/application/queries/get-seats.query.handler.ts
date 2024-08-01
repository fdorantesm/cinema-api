import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { GetSeatsQuery } from '@/modules/seats/domain/queries/get-seats.query';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';
import type { SeatsService } from '@/modules/seats/domain/contracts/seats.service.contract';
import { InjectService } from '@/core/application/inject-service.decorator';

@QueryHandler(GetSeatsQuery)
export class GetSeatsQueryHandler implements IQueryHandler<GetSeatsQuery> {
  constructor(
    @InjectService('SEATS_SERVICE')
    private readonly seatsService: SeatsService,
  ) {}

  public async execute(query: GetSeatsQuery): Promise<Seat[]> {
    const seats = await this.seatsService.find(query.filter);
    return seats.map((seat) => seat.toJson());
  }
}
