import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';

import { SeatModel } from '@/modules/seats/infrastructure/persistence/database/models/seat.model';
import { SeatSchema } from '@/modules/seats/infrastructure/persistence/database/schemas/seat.schema';
import { SeatsService } from '@/modules/seats/infrastructure/persistence/services/seats.service';
import { SeatsDatabaseRepository } from '@/modules/seats/infrastructure/persistence/database/repositories/seats.database-repository';
import { ListSeatsUseCase } from '@/modules/seats/application/use-cases/list-seats.use-case';
import { GetSeatsQueryHandler } from '@/modules/seats/application/queries/get-seats.query.handler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: SeatModel.name, schema: SeatSchema }]),
  ],
  providers: [
    GetSeatsQueryHandler,
    ListSeatsUseCase,
    {
      provide: 'SEATS_SERVICE',
      useClass: SeatsService,
    },
    {
      provide: 'SEATS_REPOSITORY',
      useClass: SeatsDatabaseRepository,
    },
  ],
  controllers: [],
})
export class SeatsModule {}
