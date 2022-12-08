import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { IsFieldAlreadyExist } from 'src/validate/validate.service';

@InputType()
export class CreateProductInput {
  @IsFieldAlreadyExist()
  @Length(4, 30)
  @Field()
  username: string;

  @Field()
  cover?: string;
  @Field()
  images?: string[];
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  code: string;
  @Field()
  sku: string;
  @Field()
  tags: string[] = [];
  @Field()
  priceSale: number | null;
  @Field()
  totalRating = 0;
  @Field()
  totalReview = 0;
  //   @Field()
  //   ratings: ProductRating[];
  //   @Field()
  //   reviews: ProductReview[];
  @Field()
  colors: string[];
  //   @Field()
  //   status: ProductStatus;
  //   @Field()
  //   inventoryType: ProductInventoryType;
  @Field()
  sizes: string[];
  @Field()
  available: number;
  @Field()
  description: string;
  @Field()
  sold: number;
  @Field()
  createdAt: Date | string | number;
  //   @Field()
  //   category: ProductCategory;
  //   @Field()
  //   gender: ProductGender;
}

export class CreateProductDto {}
