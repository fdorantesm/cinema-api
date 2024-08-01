import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@/core/application/inject-repository.decorator';
import type { SeatsRepository } from '@/modules/seats/domain/contracts/seats.repository.contract';
import { BaseService } from '@/core/infrastructure/services/base.service';
import type { SeatEntity } from '@/modules/seats/domain/entities/seat.entity';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';

@Injectable()
export class SeatsService extends BaseService<Seat, SeatEntity> {
  constructor(
    @InjectRepository('SEATS_REPOSITORY')
    private readonly seatsRepository: SeatsRepository,
  ) {
    super(seatsRepository);
  }
}
