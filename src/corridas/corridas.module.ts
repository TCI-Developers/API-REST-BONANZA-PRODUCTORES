import { Module } from '@nestjs/common';
import { CorridasService } from './corridas.service';
import { CorridasController } from './corridas.controller';
import { QuickBaseRepository } from 'src/integrations/quickbase/quickbase.repository';
import { CorridaRepository } from './repository/corrida.repository';
import { SharedModule } from 'src/shared/shared.module';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [QuickbaseModule, SharedModule, AuthModule],
  controllers: [CorridasController],
  providers: [CorridasService, QuickBaseRepository,CorridaRepository],
  exports:[CorridasService]
})
export class CorridasModule {}
