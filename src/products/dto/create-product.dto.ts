export class CreateProductDto {
  readonly id: string;
  readonly cover: string;
  readonly images: string[];
  readonly name: string;
  readonly price: number;
  readonly code: string;
  readonly sku: string;
  readonly tags: string[];
  readonly priceSale: number | null;
  readonly totalRating: number;
  readonly totalReview: number;
  // readonly ratings: ProductRating[];
  // readonly reviews: ProductReview[];
  readonly colors: string[];
  // readonly status: ProductStatus;
  // readonly inventoryType: ProductInventoryType;
  readonly sizes: string[];
  readonly available: number;
  readonly description: string;
  readonly sold: number;
  //   readonly createdAt: Date | string | number;
  //     readonly category: ProductCategory;
  //     readonly gender: ProductGender;
}
