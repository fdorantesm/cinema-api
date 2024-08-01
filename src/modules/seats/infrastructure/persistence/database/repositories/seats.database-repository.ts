import { InjectModel } from '@nestjs/mongoose';
import type { PaginateModel } from 'mongoose';

import { Repository } from '@/core/application/repository.decorator';
import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { SeatEntity } from '@/modules/seats/domain/entities/seat.entity';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';
import { SeatModel } from '@/modules/seats/infrastructure/persistence/database/models/seat.model';

@Repository()
export class SeatsDatabaseRepository extends BaseRepository<Seat, SeatEntity> {
  constructor(
    @InjectModel(SeatModel.name)
    private readonly seatModel: PaginateModel<SeatModel>,
  ) {
    super(seatModel, SeatEntity);
  }
}
