import { BansModule } from '@/modules/admin/bans/bans.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BansModule],
})
export class AdminModule {}
