import { SchemaFactory } from '@nestjs/mongoose';

import { MovieModel } from '@/modules/movies/infrastructure/persistence/database/models/movie.model';

export const MovieSchema = SchemaFactory.createForClass(MovieModel);
