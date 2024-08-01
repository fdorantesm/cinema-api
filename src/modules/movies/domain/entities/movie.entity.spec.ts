import { MovieEntity } from '@/modules/movies/domain/entities/movie.entity';
import { RatingBlockEnum } from '@/modules/movies/domain/enums/rating-block.enum';

describe('MovieEntity', () => {
  it('should create a movie entity', () => {
    const movie = MovieEntity.create({
      uuid: '123',
      name: 'Movie Name',
      genres: ['Action'],
      synopsis: 'synopsis',
      duration: 120,
      releaseDate: new Date('2021-01-01'),
      director: 'Director Name',
      cast: ['Actor 1', 'Actor 2'],
      trailer: 'https://www.youtube.com/watch?v=123',
      poster: 'https://www.image.com/image.jpg',
      rate: RatingBlockEnum.G,
      language: 'English',
      subtitles: ['Spanish'],
    });

    expect(movie).toBeInstanceOf(MovieEntity);
    expect(movie.getName()).toBe('Movie Name');
    expect(movie.getGenres()).toEqual(['Action']);
    expect(movie.getsynopsis()).toBe('synopsis');
    expect(movie.getDuration()).toBe(120);
    expect(movie.getReleaseDate()).toEqual(new Date('2021-01-01'));
    expect(movie.getDirector()).toBe('Director Name');
    expect(movie.getCast()).toEqual(['Actor 1', 'Actor 2']);
    expect(movie.getTrailer()).toBe('https://www.youtube.com/watch?v=123');
    expect(movie.getPoster()).toBe('https://www.image.com/image.jpg');
    expect(movie.getRate()).toBe(RatingBlockEnum.G);
  });

  it('should return a movie with primitive types', () => {
    const movie = MovieEntity.create({
      uuid: '123',
      name: 'Movie Name',
      genres: ['Action'],
      synopsis: 'synopsis',
      duration: 120,
      releaseDate: new Date('2021-01-01'),
      director: 'Director Name',
      cast: ['Actor 1', 'Actor 2'],
      trailer: 'https://www.youtube.com/watch?v=123',
      poster: 'https://www.image.com/image.jpg',
      rate: RatingBlockEnum.G,
      language: 'English',
      subtitles: ['Spanish'],
    });

    expect(movie.toJson()).toEqual({
      uuid: '123',
      name: 'Movie Name',
      genres: ['Action'],
      synopsis: 'synopsis',
      duration: 120,
      releaseDate: new Date('2021-01-01'),
      director: 'Director Name',
      cast: ['Actor 1', 'Actor 2'],
      trailer: 'https://www.youtube.com/watch?v=123',
      poster: 'https://www.image.com/image.jpg',
      rate: RatingBlockEnum.G,
      language: 'English',
      subtitles: ['Spanish'],
    });
  });
});
