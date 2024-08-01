import { ResourceEntity } from '@/core/domain/resource-entity';
import type { Auditorium } from '@/modules/auditoriums/domain/interfaces/auditorium.interface';

export class AuditoriumEntity extends ResourceEntity<Auditorium> {
  static create(payload: Auditorium): AuditoriumEntity {
    return new AuditoriumEntity(payload);
  }

  public getName(): string {
    return this._props.name;
  }

  public getCapacity(): number {
    return this._props.capacity;
  }

  public getDescription(): string {
    return this._props.description;
  }

  public getShowtimes(): string[] {
    return this._props.showtimes;
  }

  public setName(name: string): void {
    this._props.name = name;
  }

  public setCapacity(capacity: number): void {
    this._props.capacity = capacity;
  }

  public setDescription(description: string): void {
    this._props.description = description;
  }

  public setShowtimes(showtimes: string[]): void {
    this._props.showtimes = showtimes;
  }
}
