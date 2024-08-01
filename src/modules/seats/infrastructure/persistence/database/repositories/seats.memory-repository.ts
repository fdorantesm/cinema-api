import type Datastore from 'nedb-promises';
import { InjectModel } from '@nestjs/mongoose';

import { Repository } from '@/core/application/repository.decorator';
import { SeatEntity } from '@/modules/seats/domain/entities/seat.entity';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';
import { BaseMemoryRepository } from '@/core/infrastructure/repositories/base.memory-repository';

@Repository()
export class SeatsMemoryRepository extends BaseMemoryRepository<Seat, SeatEntity> {
  constructor(
    @InjectModel('SEAT_MODEL')
    private readonly seatModel: Datastore<Seat>,
  ) {
    super(seatModel, SeatEntity);
  }
}
