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
  public name: string;

  @Prop({ type: Number })
  public capacity: number;

  @Prop({ type: String })
  public description: string;

  @Prop({ type: String, index: true })
  public showtimes: string[];

  @Prop({ type: String, index: true })
  public movieId: string;
}
