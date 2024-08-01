import { Prop, Schema } from '@nestjs/mongoose';

import { ResourceDocument } from '@/core/infrastructure/models/resource-document';

@Schema({
  timestamps: true,
  collection: 'movies',
  autoCreate: true,
  autoIndex: true,
})
export class MovieModel extends ResourceDocument {
  @Prop({ type: String, index: true })
  name: string;

  @Prop({ type: [String] })
  genres: string[];

  @Prop({ type: String })
  sinopsis: string;

  @Prop({ type: Number })
  duration: number;

  @Prop({ type: Date })
  releaseDate: Date;

  @Prop({ type: String })
  director: string;

  @Prop({ type: [String] })
  cast: string[];

  @Prop({ type: String })
  trailer: string;

  @Prop({ type: String })
  poster: string;

  @Prop({ type: String })
  rate: string;
}
