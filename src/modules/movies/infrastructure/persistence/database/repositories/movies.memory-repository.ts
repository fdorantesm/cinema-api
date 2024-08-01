import type Datastore from 'nedb-promises';
import { Inject, Injectable } from '@nestjs/common';

import { BaseMemoryRepository } from '@/core/infrastructure/repositories/base.memory-repository';
import { MovieEntity } from '@/modules/movies/domain/entities/movie.entity';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';

@Injectable()
export class MoviesMemoryRepository extends BaseMemoryRepository<Movie, MovieEntity> {
  constructor(
    @Inject('MOVIE_MODEL')
    private readonly movieModel: Datastore<Movie>,
  ) {
    super(movieModel, MovieEntity);
  }
}
