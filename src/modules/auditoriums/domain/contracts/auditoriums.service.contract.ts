import type { Crud } from '@/core/domain/crud.interface';
import type { AuditoriumEntity } from '@/modules/auditoriums/domain/entities/auditorium.entity';
import type { Auditorium } from '@/modules/auditoriums/domain/interfaces/auditorium.interface';

export interface AuditoriumsService extends Crud<Auditorium, AuditoriumEntity> {}
