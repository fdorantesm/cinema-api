import { RatingBlockEnum } from '@/modules/movies/domain/enums/rating-block.enum';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';

export const movies: Movie[] = [
  {
    uuid: '123',
    name: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genres: ['Drama'],
    cast: ['Tim Robbins', 'Morgan Freeman'],
    duration: 142,
    releaseDate: new Date('1994-10-14'),
    language: 'English',
    rate: RatingBlockEnum.R,
    poster: 'https://www.image.com/image.jpg',
    synopsis: 'Two imprisoned',
    subtitles: ['Spanish'],
    trailer: 'https://www.youtube.com/watch?v=123',
  },
  {
    uuid: '456',
    name: 'The Godfather',
    director: 'Francis Ford Coppola',
    genres: ['Crime', 'Drama'],
    cast: ['Marlon Brando', 'Al Pacino'],
    duration: 175,
    releaseDate: new Date('1972-03-24'),
    language: 'English',
    rate: RatingBlockEnum.R,
    poster: 'https://www.image.com/image.jpg',
    synopsis: 'The aging patriarch',
    subtitles: ['Spanish'],
    trailer: 'https://www.youtube.com/watch?v=123',
  },
];
