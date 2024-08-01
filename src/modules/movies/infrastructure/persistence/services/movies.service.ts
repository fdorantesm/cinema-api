import { Inject, Injectable } from '@nestjs/common';

import type { Crud } from '@/core/domain/crud.interface';
import { BaseService } from '@/core/infrastructure/services/base.service';
import type { MovieEntity } from '@/modules/movies/domain/entities/movie.entity';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';

@Injectable()
export class MoviesService extends BaseService<Movie, MovieEntity> {
  constructor(
    @Inject('MOVIES_REPOSITORY')
    private readonly moviesRepository: Crud<Movie, MovieEntity>,
  ) {
    super(moviesRepository);
  }
}
