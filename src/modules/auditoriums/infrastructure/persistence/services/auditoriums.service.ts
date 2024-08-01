import { Injectable } from '@nestjs/common';

import { BaseService } from '@/core/infrastructure/services/base.service';
import type { AuditoriumEntity } from '@/modules/auditoriums/domain/entities/auditorium.entity';
import type { Auditorium } from '@/modules/auditoriums/domain/interfaces/auditorium.interface';
import { InjectRepository } from '@/core/application/inject-repository.decorator';
import type { AuditoriumsRepository } from '@/modules/auditoriums/domain/contracts/auditoriums.repository.contract';

@Injectable()
export class AuditoriumsService extends BaseService<Auditorium, AuditoriumEntity> {
  constructor(
    @InjectRepository('AUDITORIUMS_REPOSITORY')
    private readonly auditoriumsRepository: AuditoriumsRepository,
  ) {
    super(auditoriumsRepository);
  }
}
