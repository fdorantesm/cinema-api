import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuditoriumModel } from '@/modules/auditoriums/infrastructure/persistence/database/models/auditorium.model';
import { AuditoriumSchema } from '@/modules/auditoriums/infrastructure/persistence/database/schemas/auditorium.schema';
import { AuditoriumsDatabaseRepository } from '@/modules/auditoriums/infrastructure/persistence/database/repositories/auditoriums.database-repository';
import { AuditoriumsService } from '@/modules/auditoriums/infrastructure/persistence/services/auditoriums.service';
import { ListAuditoriumsUseCase } from '@/modules/auditoriums/application/use-cases/list-auditoriums.use-case';
import { GetAuditoriumUseCase } from '@/modules/auditoriums/application/use-cases/get-auditorium.use-case';
import { AuditoriumsController } from '@/modules/auditoriums/infrastructure/http/controllers/auditoriums.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AuditoriumModel.name,
        schema: AuditoriumSchema,
      },
    ]),
  ],
  providers: [
    ListAuditoriumsUseCase,
    GetAuditoriumUseCase,
    {
      provide: 'AUDITORIUMS_REPOSITORY',
      useClass: AuditoriumsDatabaseRepository,
    },
    {
      provide: 'AUDITORIUMS_SERVICE',
      useClass: AuditoriumsService,
    },
  ],
  controllers: [AuditoriumsController],
})
export class AuditoriumModule {}
