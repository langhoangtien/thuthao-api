import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/categories/schemas/category.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: string;
  @Prop()
  cover: string;
  @Prop()
  images: string[];
  @Prop()
  name: string;
  @Prop()
  price: number;
  @Prop()
  code: string;
  @Prop()
  sku: string;
  @Prop()
  tags: string[];
  @Prop()
  priceSale: number | null;
  @Prop()
  totalRating: number;
  @Prop()
  totalReview: number;
  //   @Prop()
  //   ratings: ProductRating[];
  //   @Prop()
  //   reviews: ProductReview[];
  @Prop()
  colors: string[];
  //   @Prop()
  //   status: ProductStatus;
  //   @Prop()
  //   inventoryType: ProductInventoryType;
  @Prop()
  sizes: string[];
  @Prop()
  available: number;
  @Prop()
  description: string;
  @Prop()
  sold: number;
  // @Prop()
  // createdAt: Date | string | number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;
  //   @Prop()
  //   gender: ProductGender;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
