import type { Crud } from '@/core/domain/crud.interface';
import type { SeatEntity } from '@/modules/seats/domain/entities/seat.entity';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';

export interface SeatsService extends Crud<Seat, SeatEntity> {}
