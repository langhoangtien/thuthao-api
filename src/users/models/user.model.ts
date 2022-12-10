import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cat } from 'src/cats/models/cat.model';

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

  // @Field()
  _id: string;

  @Field((type) => [Cat])
  cats: Cat[];
}
