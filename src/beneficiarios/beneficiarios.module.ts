import { Module } from '@nestjs/common';
import { BeneficiariosService } from './beneficiarios.service';
import { BeneficiariosController } from './beneficiarios.controller';
import { QuickbaseModule } from 'src/integrations/quickbase/quickbase.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthModule } from 'src/auth/auth.module';
import { QuickBaseRepository } from 'src/integrations/quickbase/quickbase.repository';
import { BeneficiariosRepository } from './repository/beneficiario.repository';

@Module({
  imports:[QuickbaseModule,SharedModule,AuthModule],
  controllers: [BeneficiariosController],
  providers: [BeneficiariosService,QuickBaseRepository,BeneficiariosRepository],
})
export class BeneficiariosModule {}
