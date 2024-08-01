import type { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';

export interface Auditorium extends ResourceProps {
  name: string;
  capacity: number;
  description: string;
  showtimes: string[];
  movieId: string;
}
