import { Module } from '@nestjs/common';
import { ProductoresService } from './productores.service';
import { ProductoresController } from './productores.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from 'src/auth/auth.module';
import { QuickBaseRepository } from 'src/integrations/quickbase/quickbase.repository';
import { ProductoresRepository } from './repository/productores.repository';

@Module({
  imports:[QuickbaseModule,SharedModule,AuthModule],
  controllers: [ProductoresController],
  providers: [ProductoresService, QuickBaseRepository,ProductoresRepository],
})
export class ProductoresModule {}
