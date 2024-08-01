import { Test, type TestingModule } from '@nestjs/testing';
import DataStore = require('nedb-promises');

import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';
import { MoviesService } from '@/modules/movies/infrastructure/persistence/services/movies.service';
import type { MoviesRepository } from '@/modules/movies/domain/contracts/movies.repository.contract';
import { MoviesMemoryRepository } from '@/modules/movies/infrastructure/persistence/database/repositories/movies.memory-repository';
import type { Json } from '@/core/types/general/json.type';
import type { MovieEntity } from '@/modules/movies/domain/entities/movie.entity';
import { movies } from '#/mocks/movies.mock';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let moviesRepository: MoviesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'MOVIE_MODEL',
          useValue: DataStore.create(),
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
    }).compile();

    moviesService = module.get<MoviesService>('MOVIES_SERVICE');
    moviesRepository = module.get<MoviesRepository>('MOVIES_REPOSITORY');

    moviesRepository.deleteMany({});
  });

  it('should return a list of movies', async () => {
    await moviesRepository.createMany(movies);

    const result: Json = await moviesService.paginate({}, {});

    const rows = result.docs.map((movie: MovieEntity) => movie.toJson());

    expect(result).toHaveProperty('docs');
    expect(result).toHaveProperty('total', 2);
    expect(result).toHaveProperty('limit', 10);
    expect(result).toHaveProperty('page', 1);
    expect(result).toHaveProperty('pages', 1);
    expect(rows).toHaveLength(2);
    rows.forEach((row: Movie) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('genres');
      expect(row).toHaveProperty('sinopsis');
      expect(row).toHaveProperty('duration');
      expect(row).toHaveProperty('releaseDate');
      expect(row).toHaveProperty('director');
      expect(row).toHaveProperty('cast');
      expect(row).toHaveProperty('trailer');
      expect(row).toHaveProperty('poster');
      expect(row).toHaveProperty('rate');
      expect(row).toHaveProperty('language');
      expect(row).toHaveProperty('subtitles');
    });
  });

  it('should return a movie by uuid', async () => {
    await moviesRepository.create(movies[0]);

    const movie: MovieEntity = await moviesService.findOne({ uuid: '123' });

    expect(movie.toJson()).toEqual(movies[0]);
  });
});
