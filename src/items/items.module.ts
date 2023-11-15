import { Module } from '@nestjs/common';
import { ItemController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemsSchema } from './Schema/items.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemsSchema }]),
  ],
  controllers: [ItemController],
  providers: [ItemsService],
})
export class ItemModule {}
