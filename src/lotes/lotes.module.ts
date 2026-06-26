import { Module } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { LotesController } from './lotes.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports:[QuickbaseModule,SharedModule],
  controllers: [LotesController],
  providers: [LotesService],
})
export class LotesModule {}
