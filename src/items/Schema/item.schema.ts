import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ItemDocument = Item & mongoose.Document;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  qty: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
