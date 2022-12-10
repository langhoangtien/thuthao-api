import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CoreEntity } from 'src/common/entities/core.entity';

export type ProductDocument = HydratedDocument<Product>;

enum ProductStatus {
  'sale',
  'new',
  '',
}

@Schema()
export class Product extends CoreEntity {
  //   @Prop()
  //   name: string;

  //   @Prop()
  //   age: number;

  //   @Prop()
  //   breed: string;

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
  @Prop()
  status: ProductStatus;
  //   @Prop()
  //   inventoryType: ProductInventoryType;
  @Prop()
  sizes?: string[];
  @Prop()
  available: number;
  @Prop()
  description: string;
  @Prop()
  sold: number;
  //   @Prop()
  // category: Category;
  //   @Prop()
  //   gender: ProductGender;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
