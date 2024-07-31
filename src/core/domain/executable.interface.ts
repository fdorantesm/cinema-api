import { Context } from '@/core/domain/interfaces/context.interface';

export interface Executable {
  execute(ctx: Context, ...params: unknown[]): Promise<unknown> | unknown | void;
}
