import { Inject, Logger, NotFoundException } from '@nestjs/common';

import type { Executable } from '@/core/domain/executable.interface';
import type { Context } from '@/core/domain/interfaces/context.interface';
import type { MoviesService } from '@/modules/movies/domain/contracts/movies.service.contract';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';

export class GetMovieUseCase implements Executable {
  constructor(
    @Inject('MOVIES_SERVICE')
    private readonly moviesService: MoviesService,
  ) {}

  public async execute(ctx: Context, uuid: string): Promise<Movie> {
    Logger.log('GetMovieUseCase called', ctx.requestId);
    const movie = await this.moviesService.findOne({ uuid });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie.toJson();
  }
}
