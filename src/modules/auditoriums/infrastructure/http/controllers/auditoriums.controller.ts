import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { GetAuditoriumUseCase } from '@/modules/auditoriums/application/use-cases/get-auditorium.use-case';
import { ListAuditoriumsUseCase } from '@/modules/auditoriums/application/use-cases/list-auditoriums.use-case';
import type { Context } from '@/core/domain/interfaces/context.interface';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { QueryParser } from '@/core/infrastructure/decorators/query-parser.decorator';
import { GetAuditoriumSeatsByShowtimeUseCase } from '@/modules/auditoriums/application/use-cases/get-auditorium-seats.use-case';

@ApiTags('Auditoriums')
@Controller({ path: '/auditoriums', version: '1' })
export class AuditoriumsController {
  constructor(
    private readonly listAuditoriumsUseCase: ListAuditoriumsUseCase,
    private readonly getAuditoriumUseCase: GetAuditoriumUseCase,
    private readonly getAuditoriumSeatsUseCase: GetAuditoriumSeatsByShowtimeUseCase,
  ) {}

  @Get('/')
  public async list(
    @Ctx() ctx: Context,
    @QueryParser('filter') filter,
    @QueryParser('options') options,
  ) {
    return await this.listAuditoriumsUseCase.execute(ctx, filter, options);
  }

  @Get('/:uuid')
  public async get(@Ctx() ctx: Context, @Param('uuid') uuid: string) {
    return await this.getAuditoriumUseCase.execute(ctx, uuid);
  }

  @Get('/:uuid/seats/:showtime')
  public async getSeats(@Ctx() ctx: Context, @Param('uuid') uuid: string) {
    return await this.getAuditoriumSeatsUseCase.execute(ctx, uuid);
  }
}
