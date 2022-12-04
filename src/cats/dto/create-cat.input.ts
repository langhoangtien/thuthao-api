import { InputType, Field } from '@nestjs/graphql';
// import { User } from 'src/users/models/user.model';

@InputType()
export class CreateCatInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;

  @Field()
  user: string;
}
