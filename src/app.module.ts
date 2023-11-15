import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database';
import { ItemModule } from './items/items.module';

@Module({
  imports: [DatabaseModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
