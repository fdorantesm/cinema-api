import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { PaginateModel } from 'mongoose';

import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { AuditoriumEntity } from '@/modules/auditoriums/domain/entities/auditorium.entity';
import type { Auditorium } from '@/modules/auditoriums/domain/interfaces/auditorium.interface';
import { AuditoriumModel } from '@/modules/auditoriums/infrastructure/persistence/database/models/auditorium.model';

@Injectable()
export class AuditoriumsDatabaseRepository extends BaseRepository<
  Auditorium,
  AuditoriumEntity
> {
  constructor(
    @InjectModel(AuditoriumModel.name)
    private readonly auditoriumModel: PaginateModel<AuditoriumModel>,
  ) {
    super(auditoriumModel, AuditoriumEntity);
  }
}
