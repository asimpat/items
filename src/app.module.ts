import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { DatabaseModule } from './database/database';

@Module({
  imports: [ItemsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}