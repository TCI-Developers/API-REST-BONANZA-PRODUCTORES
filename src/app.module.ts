import { Module } from '@nestjs/common';
import { HuertasModule } from './huertas/huertas.module';
import { ProductoresModule } from './productores/productores.module';
import { QuickbaseModule } from './integrations/quickbase/quickbase.module';
import { QuickbaseClient } from './integrations/quickbase/quickbase.client';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { LotesModule } from './lotes/lotes.module';
import { RecosModule } from './recos/recos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ 
     ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,HuertasModule, ProductoresModule, QuickbaseModule, SharedModule, LotesModule, RecosModule, AuthModule, UsersModule],
  exports:[QuickbaseClient],
  controllers: [],
  providers: [QuickbaseClient],
})
export class AppModule {}
 