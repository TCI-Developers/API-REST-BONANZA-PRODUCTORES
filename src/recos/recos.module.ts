import { Module } from '@nestjs/common';
import { RecosService } from './recos.service';
import { RecosController } from './recos.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from 'src/auth/auth.module';
import { QuickBaseRepository } from 'src/integrations/quickbase/quickbase.repository';
import { RecosRepository } from './repository/reco.repository';

@Module({
  imports: [QuickbaseModule, SharedModule,AuthModule],
  controllers: [RecosController],
  providers: [RecosService, QuickBaseRepository,RecosRepository],
})
export class RecosModule {}
