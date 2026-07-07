import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports:[QuickbaseModule, SharedModule]
})
export class UsersModule {}
