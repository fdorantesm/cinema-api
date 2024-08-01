import { Prop, Schema } from '@nestjs/mongoose';

import { ResourceDocument } from '@/core/infrastructure/models/resource-document';

@Schema({
  timestamps: true,
  collection: 'seats',
  autoCreate: true,
  autoIndex: true,
})
export class SeatModel extends ResourceDocument {
  @Prop({ type: String, index: true })
  auditoriumId: string;

  @Prop({ type: String })
  row: number;

  @Prop({ type: Number })
  column: number;
}
