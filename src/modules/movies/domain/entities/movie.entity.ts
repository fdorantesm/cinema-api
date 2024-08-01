import { ResourceEntity } from '@/core/domain/resource-entity';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';

export class MovieEntity extends ResourceEntity<Movie> {
  public static create(props: Movie): MovieEntity {
    return new MovieEntity(props);
  }

  public getName(): string {
    return this._props.name;
  }

  public getGenres(): string[] {
    return this._props.genres;
  }

  public getsynopsis(): string {
    return this._props.synopsis;
  }

  public getDuration(): number {
    return this._props.duration;
  }

  public getReleaseDate(): Date {
    return this._props.releaseDate;
  }

  public getDirector(): string {
    return this._props.director;
  }

  public getCast(): string[] {
    return this._props.cast;
  }

  public getTrailer(): string {
    return this._props.trailer;
  }

  public getPoster(): string {
    return this._props.poster;
  }

  public getRate(): string {
    return this._props.rate;
  }

  public getLanguage(): string {
    return this._props.language;
  }

  public getSubtitles(): string[] {
    return this._props.subtitles;
  }

  public update(props: Partial<Movie>): void {
    this._props = { ...this._props, ...props };
  }

  public getFriendlyDuration(): string {
    const hours = Math.floor(this._props.duration / 60);
    const minutes = this._props.duration % 60;
    return `${hours}h ${minutes}m`;
  }
}
