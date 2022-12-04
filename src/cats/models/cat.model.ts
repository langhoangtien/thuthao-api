import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Cat {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  breed: string;

  @Field()
  user: User;
}
