import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Coupon } from '../entities/coupon.entity';

@InputType()
export class VerifyCouponInput {
  @Field()
  code: string;
}
@ObjectType()
export class VerifyCouponResponse {
  @Field()
  is_valid: boolean;

  @Field((type) => [Coupon])
  coupon: Coupon;
}
