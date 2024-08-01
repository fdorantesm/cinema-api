import { SchemaFactory } from '@nestjs/mongoose';

import { AuditoriumModel } from '@/modules/auditoriums/infrastructure/persistence/database/models/auditorium.model';

export const AuditoriumSchema = SchemaFactory.createForClass(AuditoriumModel);
