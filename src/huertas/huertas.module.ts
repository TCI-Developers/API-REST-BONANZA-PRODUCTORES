import { Module } from '@nestjs/common';
import { HuertasService } from './huertas.service';
import { HuertasController } from './huertas.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports:[QuickbaseModule, SharedModule],
  controllers: [HuertasController],
  providers: [HuertasService],
})
export class HuertasModule {}
