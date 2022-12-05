import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class LoginInput {
  @Length(4, 30)
  @Field()
  username: string;

  @Field()
  @IsNotEmpty()
  password: string;
}
