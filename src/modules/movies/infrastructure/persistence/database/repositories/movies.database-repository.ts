import type { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { BaseRepository } from '@/core/infrastructure/repositories/base.repository';
import { MovieEntity } from '@/modules/movies/domain/entities/movie.entity';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';
import { MovieModel } from '@/modules/movies/infrastructure/persistence/database/models/movie.model';

@Injectable()
export class MovieDatabaseRepository extends BaseRepository<Movie, MovieEntity> {
  constructor(
    @InjectModel(MovieModel.name)
    private readonly movieModel: PaginateModel<MovieModel>,
  ) {
    super(movieModel, MovieEntity);
  }
}
