import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, Length } from 'class-validator';
import { IsFieldAlreadyExist } from 'src/validate/validate.service';

@InputType()
export class ChangePasswordInput {
  @Field()
  @IsNotEmpty()
  password: string;
  @Field()
  @IsNotEmpty()
  oldPassword: string;
}
