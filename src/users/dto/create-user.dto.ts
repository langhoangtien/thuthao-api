import { IsEmail, IsInt, IsNotEmpty, Length, Max, Min } from 'class-validator';
import { IsFieldAlreadyExist } from 'src/validate/validate.service';
export class CreateUserDto {
  @IsEmail()
  @Length(4, 50)
  @IsFieldAlreadyExist()
  readonly email: string;

  @IsFieldAlreadyExist()
  @Length(4, 30)
  readonly username: string;
  readonly age?: number;

  @IsInt()
  @Min(0)
  @Max(10)
  role: number;

  @IsNotEmpty()
  password: string;

  avatar?: string;
}
