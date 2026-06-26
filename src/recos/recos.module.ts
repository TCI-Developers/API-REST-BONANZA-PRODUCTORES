import { Module } from '@nestjs/common';
import { RecosService } from './recos.service';
import { RecosController } from './recos.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [QuickbaseModule, SharedModule],
  controllers: [RecosController],
  providers: [RecosService],
})
export class RecosModule {}
