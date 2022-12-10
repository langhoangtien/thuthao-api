// import { Injectable, Injectable } from '@nestjs/common';
// import {
//   registerDecorator,
//   ValidationOptions,
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
//   ValidationArguments,
// } from 'class-validator';

// @ValidatorConstraint({ name: 'ImageSizeAndType', async: false })
// @Injectable()
// export class ImageSizeAndTypeConstraint implements ValidatorConstraintInterface {
//   validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
//     console.log('VALUE', value, 'ARGUMANT', validationArguments);

//     const mimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//     return mimeTypes.find((mimeType) => mimeType === value.mimetype) && value.size < 200000;
//   }
// }

// export function ImageSizeAndType(validationOptions?: ValidationOptions) {
//   return function (object: any, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: { message: `This ${propertyName} has been used XXX`, ...validationOptions },
//       constraints: [],
//       validator: ImageSizeAndTypeConstraint,
//     });
//   };
// }
