import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import type { Context } from '@/core/domain/interfaces/context.interface';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { QueryParser } from '@/core/infrastructure/decorators/query-parser.decorator';
import { ListMoviesUseCase } from '@/modules/movies/application/use-cases/list-movies.use-case';
import { GetMovieUseCase } from '@/modules/movies/application/use-cases/get-movie.use-case';

@ApiTags('Movies')
@Controller({ path: 'movies', version: '1' })
export class MoviesController {
  constructor(
    private readonly listMoviesUseCase: ListMoviesUseCase,
    private readonly getMovieUseCase: GetMovieUseCase,
  ) {}

  @ApiQuery({ name: 'filter', required: false, type: 'string' })
  @ApiQuery({ name: 'options', required: false, type: 'string' })
  @Get('/')
  async listMovies(
    @Ctx() ctx: Context,
    @QueryParser('filter') filter,
    @QueryParser('options') options,
  ) {
    return await this.listMoviesUseCase.execute(ctx, filter, options);
  }

  @Get('/:uuid')
  async getMovie(@Ctx() ctx: Context, @Param('uuid') uuid: string) {
    return await this.getMovieUseCase.execute(ctx, uuid);
  }
}
