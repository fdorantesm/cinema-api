import { Module } from '@nestjs/common';

import { CoreModule } from '@/core/core.module';
import { DatabaseModule } from '@/database/database.module';
import { AdminModule } from '@/modules/admin/admin.module';
import { HealthModule } from '@/modules/health/health.module';
import { MoviesModule } from '@/modules/movies/movies.module';
import { RolesModule } from '@/modules/roles/roles.module';
import { SharedModule } from '@/modules/shared/shared.module';
import { UsersModule } from '@/modules/users/users.module';

@Module({
  imports: [
    CoreModule,
    DatabaseModule,
    UsersModule,
    RolesModule,
    HealthModule,
    SharedModule,
    AdminModule,
    MoviesModule,
  ],
})
export class AppModule {}
