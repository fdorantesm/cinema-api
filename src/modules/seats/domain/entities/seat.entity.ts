import { ResourceEntity } from '@/core/domain/resource-entity';
import type { Seat } from '@/modules/seats/domain/interfaces/seat.interface';

export class SeatEntity extends ResourceEntity<Seat> {
  public static create(payload: Seat): SeatEntity {
    return new SeatEntity(payload);
  }

  public getAuditoriumId(): string {
    return this._props.auditoriumId;
  }

  public getRow(): string {
    return this._props.row;
  }

  public getColumn(): number {
    return this._props.column;
  }
}
