import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { UsersService } from 'src/users/users.service';

@ValidatorConstraint({ name: 'IsFieldAlreadyExist', async: true })
@Injectable()
export class IsFieldAlreadyExistConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}
  validate(value: any, args: ValidationArguments) {
    return this.usersService.findOneByProperty({ name: args.property, value }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

export function IsFieldAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: { message: `This ${propertyName} has been used`, ...validationOptions },
      constraints: [],
      validator: IsFieldAlreadyExistConstraint,
    });
  };
}
