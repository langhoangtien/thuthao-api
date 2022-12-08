import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, Length } from 'class-validator';
import { IsFieldAlreadyExist } from 'src/validate/validate.service';

@InputType()
export class RegisterInput {
  @IsFieldAlreadyExist()
  @Length(4, 30)
  @Field()
  username: string;

  @IsEmail()
  @Length(4, 50)
  @IsFieldAlreadyExist()
  @Field()
  email: string;

  @IsInt()
  @Field()
  age?: number;

  @Field()
  @IsNotEmpty()
  password: string;
}
