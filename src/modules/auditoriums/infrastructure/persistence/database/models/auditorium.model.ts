import { Prop, Schema } from '@nestjs/mongoose';

import { ResourceDocument } from '@/core/infrastructure/models/resource-document';

@Schema({
  timestamps: true,
  collection: 'auditoriums',
  autoCreate: true,
  autoIndex: true,
})
export class AuditoriumModel extends ResourceDocument {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  capacity: number;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, index: true })
  showtimes: string[];
}
