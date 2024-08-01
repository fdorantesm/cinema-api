import type { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';

export interface Seat extends ResourceProps {
  auditoriumId: string;
  row: string;
  column: number;
}
