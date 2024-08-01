import type { Crud } from '@/core/domain/crud.interface';
import type { MovieEntity } from '@/modules/movies/domain/entities/movie.entity';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';

export interface MoviesRepository extends Crud<Movie, MovieEntity> {}
