import { Module } from '@nestjs/common';
import { HuertasService } from './huertas.service';
import { HuertasController } from './huertas.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from 'src/auth/auth.module';
import { QuickBaseRepository } from 'src/integrations/quickbase/quickbase.repository';
import { HuertasRepository } from './repository/huertas.repository';

@Module({
  imports:[QuickbaseModule, SharedModule,AuthModule],
  controllers: [HuertasController],
  providers: [HuertasService,QuickBaseRepository,HuertasRepository],
})
export class HuertasModule {}
