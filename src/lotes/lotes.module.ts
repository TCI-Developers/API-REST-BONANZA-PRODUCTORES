import { Module } from '@nestjs/common';
import { LotesService } from './lotes.service';
import { LotesController } from './lotes.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from 'src/auth/auth.module';
import { LotesRepository } from './repository/lotes.repository';
import { QuickBaseRepository } from '../integrations/quickbase/quickbase.repository';
import { CorridasModule } from 'src/corridas/corridas.module';
import { CorridasService } from '../corridas/corridas.service';

@Module({
  imports:[QuickbaseModule,SharedModule,AuthModule,CorridasModule],
  controllers: [LotesController],
  providers: [LotesService,QuickBaseRepository,LotesRepository],
})
export class LotesModule {}
