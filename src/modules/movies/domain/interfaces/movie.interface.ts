import type { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';
import type { RatingBlockEnum } from '@/modules/movies/domain/enums/rating-block.enum';

export interface Movie extends ResourceProps {
  name: string;
  genres: string[];
  synopsis: string;
  duration: number;
  releaseDate: Date;
  director: string;
  cast: string[];
  trailer: string;
  poster: string;
  rate: RatingBlockEnum;
  language: string;
  subtitles: string[];
}
