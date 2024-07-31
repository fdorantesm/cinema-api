import { CoreModule } from '@/core/core.module';
import { DatabaseModule } from '@/database/database.module';
import { AdminModule } from '@/modules/admin/admin.module';
import { HealthModule } from '@/modules/health/health.module';
import { RolesModule } from '@/modules/roles/roles.module';
import { SharedModule } from '@/modules/shared/shared.module';
import { UsersModule } from '@/modules/users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CoreModule,
    DatabaseModule,
    UsersModule,
    RolesModule,
    HealthModule,
    SharedModule,
    AdminModule,
  ],
})
export class AppModule {}
