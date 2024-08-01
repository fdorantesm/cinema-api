import Datastore = require('nedb-promises');
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { CoreModule } from '@/core/core.module';
import { MoviesMemoryRepository } from '@/modules/movies/infrastructure/persistence/database/repositories/movies.memory-repository';
import { ListMoviesUseCase } from '@/modules/movies/application/use-cases/list-movies.use-case';
import { GetMovieUseCase } from '@/modules/movies/application/use-cases/get-movie.use-case';
import { MoviesService } from '@/modules/movies/infrastructure/persistence/services/movies.service';
import { MoviesController } from '@/modules/movies/infrastructure/http/controllers/movies.controller';
import type { MoviesRepository } from '@/modules/movies/domain/contracts/movies.repository.contract';
import { movies } from '#/mocks/movies.mock';

describe('MoviesController (e2e)', () => {
  let app: INestApplication;
  let moviesRepository: MoviesRepository;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
      providers: [
        ListMoviesUseCase,
        GetMovieUseCase,
        {
          provide: 'MOVIE_MODEL',
          useValue: Datastore.create(),
        },
        {
          provide: 'MOVIES_REPOSITORY',
          useClass: MoviesMemoryRepository,
        },
        {
          provide: 'MOVIES_SERVICE',
          useClass: MoviesService,
        },
      ],
      controllers: [MoviesController],
    }).compile();

    app = moduleFixture.createNestApplication();
    moviesRepository = moduleFixture.get<MoviesRepository>('MOVIES_REPOSITORY');
    app.enableVersioning();
    await app.init();
  });

  it('GET /v1/movies', async () => {
    await moviesRepository.createMany(movies);
    const response = await request(app.getHttpServer()).get('/v1/movies');
    const data = response.body.data;
    expect(response.status).toBe(HttpStatus.OK);
    expect(data).toHaveProperty('docs');
    expect(data).toHaveProperty('total', 2);
    expect(data).toHaveProperty('limit', 10);
    expect(data).toHaveProperty('page', 1);
    expect(data).toHaveProperty('pages', 1);
    expect(data.docs).toHaveLength(2);
  });

  it('GET /v1/movies/:uuid', async () => {
    await moviesRepository.createMany(movies);
    const response = await request(app.getHttpServer()).get(`/v1/movies/123`);
    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.data).toEqual({
      ...movies[0],
      releaseDate: movies[0].releaseDate.toISOString(),
    });
  });
});
