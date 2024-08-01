import { SchemaFactory } from '@nestjs/mongoose';

import { SeatModel } from '@/modules/seats/infrastructure/persistence/database/models/seat.model';

export const SeatSchema = SchemaFactory.createForClass(SeatModel);
