import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty, Length, Max, Min } from 'class-validator';
import { IsFieldAlreadyExist } from 'src/validate/validate.service';

@InputType()
export class CreateUserInput {
  @IsFieldAlreadyExist()
  @Length(4, 30)
  @Field()
  username: string;

  @IsEmail()
  @Length(4, 50)
  @IsFieldAlreadyExist()
  @Field()
  email: string;

  @Min(0)
  @Max(10)
  @IsInt()
  @Field()
  role: number;

  @IsInt()
  @Field()
  age?: number;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  avatar?: string;
}
