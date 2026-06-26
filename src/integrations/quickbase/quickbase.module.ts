import { Module } from '@nestjs/common';
import { QuickbaseService } from './quickbase.service';
import { QuickbaseController } from './quickbase.controller';
import { HttpModule } from '@nestjs/axios';
import { QuickbaseClient } from './quickbase.client';

@Module({
  imports:[HttpModule],
  exports:[QuickbaseClient],
  controllers: [QuickbaseController],
  providers: [QuickbaseService,QuickbaseClient],

})
export class QuickbaseModule {}
