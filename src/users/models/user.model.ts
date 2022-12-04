import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field(() => Int)
  role: number;

  @Field(() => Int)
  age: number;

  password: string;

  @Field()
  id: string;
}
