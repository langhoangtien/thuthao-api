import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
// import { Order } from 'src/orders/entities/order.entity';

export enum CouponType {
  FIXED_COUPON = 'fixed',
  PERCENTAGE_COUPON = 'percentage',
  FREE_SHIPPING_COUPON = 'free_shipping',
  DEFAULT_COUPON = 'fixed',
}

registerEnumType(CouponType, { name: 'CouponType' });

@InputType('CouponInputType', { isAbstract: true })
@ObjectType()
export class Coupon extends CoreEntity {
  @Field()
  code: string;

  @Field()
  description?: string;
  // orders?: Order[];
  @Field((type) => [CouponType])
  type: CouponType;

  @Field((type) => [Attachment])
  image?: Attachment;

  @Field()
  is_valid: boolean;

  @Field()
  amount: number;
  @Field()
  active_from: string;
  @Field()
  expire_at: string;
}
