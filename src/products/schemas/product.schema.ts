import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  //   @Prop()
  //   name: string;

  //   @Prop()
  //   age: number;

  //   @Prop()
  //   breed: string;
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
  //   @Prop()
  //   category: ProductCategory;
  //   @Prop()
  //   gender: ProductGender;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
