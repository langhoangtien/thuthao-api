import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Type } from 'class-transformer';

@ObjectType()
export class CoreEntityGQL {
  @Field(() => ID)
  id: number;
  @Type(() => Date)
  created_at: Date;
  @Type(() => Date)
  updated_at: Date;
}

@Schema()
export class CoreEntity {
  id: number;

  @Prop()
  created_at: Date;
  @Prop()
  updated_at: Date;
}
