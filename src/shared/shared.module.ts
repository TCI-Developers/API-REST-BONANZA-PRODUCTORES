import { Module } from '@nestjs/common';
import { QuickbaseMapper } from './mappers/quickbase.mapper';

@Module({
    providers:[QuickbaseMapper],
    exports:[QuickbaseMapper]
})
export class SharedModule {}
