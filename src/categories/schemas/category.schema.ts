import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;
@Schema()
export class Category {
  @Prop({ required: true })
  name: string;
  @Prop()
  slug: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  parent?: Category;
  @Prop()
  details?: string;
  @Prop()
  image?: string;
  @Prop()
  icon?: string;
  @Prop()
  type?: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
