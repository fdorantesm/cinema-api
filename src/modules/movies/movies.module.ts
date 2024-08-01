import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MovieModel } from '@/modules/movies/infrastructure/persistence/database/models/movie.model';
import { MovieSchema } from '@/modules/movies/infrastructure/persistence/database/schemas/movie.schema';
import { MovieDatabaseRepository } from '@/modules/movies/infrastructure/persistence/database/repositories/movies.database-repository';
import { MoviesService } from '@/modules/movies/infrastructure/persistence/services/movies.service';
import { ListMoviesUseCase } from '@/modules/movies/application/use-cases/list-movies.use-case';
import { MoviesController } from '@/modules/movies/infrastructure/http/controllers/movies.controller';
import { GetMovieUseCase } from '@/modules/movies/application/use-cases/get-movie.use-case';

@Module({
  imports: [MongooseModule.forFeature([{ name: MovieModel.name, schema: MovieSchema }])],
  providers: [
    ListMoviesUseCase,
    GetMovieUseCase,
    {
      provide: 'MOVIES_REPOSITORY',
      useClass: MovieDatabaseRepository,
    },
    {
      provide: 'MOVIES_SERVICE',
      useClass: MoviesService,
    },
  ],
  controllers: [MoviesController],
})
export class MoviesModule {}
