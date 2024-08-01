import { Inject, Injectable, Logger } from '@nestjs/common';

import type { Executable } from '@/core/domain/executable.interface';
import type { Context } from '@/core/domain/interfaces/context.interface';
import type { Movie } from '@/modules/movies/domain/interfaces/movie.interface';
import type { Pagination } from '@/core/domain/pagination';
import type { MoviesService } from '@/modules/movies/domain/contracts/movies.service.contract';

@Injectable()
export class ListMoviesUseCase implements Executable {
  constructor(
    @Inject('MOVIES_SERVICE')
    private readonly moviesService: MoviesService,
  ) {}

  public async execute(ctx: Context, filter, options): Promise<Pagination<Movie>> {
    Logger.log('Executing ListMoviesUseCase...', ctx.requestId);
    const query = await this.moviesService.paginate(filter, options);
    return {
      ...query,
      docs: query.docs.map((movie) => movie.toJson()),
    };
  }
}
