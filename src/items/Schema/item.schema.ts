import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
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

  //   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' })
  //   postId: Posts;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
