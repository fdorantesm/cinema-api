import { QueryBus } from '@nestjs/cqrs';

import { UseCase } from '@/core/application/case.decorator';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';
import { GetSeatsQuery } from '@/modules/seats/domain/queries/get-seats.query';
import type { SeatEntity } from '@/modules/seats/domain/entities/seat.entity';
import type { Context } from '@/core/domain/interfaces/context.interface';

@UseCase()
export class GetAuditoriumSeatsByShowtimeUseCase {
  constructor(private readonly queryBus: QueryBus) {}

  public async execute(_ctx: Context, auditoriumId: string): Promise<Seat[]> {
    const seats = await this.queryBus.execute<GetSeatsQuery, SeatEntity[]>(
      new GetSeatsQuery({ auditoriumId }),
    );

    return seats.map((seat) => seat.toJson());
  }
}
