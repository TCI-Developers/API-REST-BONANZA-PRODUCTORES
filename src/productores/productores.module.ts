import { Module } from '@nestjs/common';
import { ProductoresService } from './productores.service';
import { ProductoresController } from './productores.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports:[QuickbaseModule,SharedModule],
  controllers: [ProductoresController],
  providers: [ProductoresService],
})
export class ProductoresModule {}
