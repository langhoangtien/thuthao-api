import { ObjectId } from 'mongoose';

export class CreateCategoryDto {
  readonly name: string;

  readonly slug: string;

  readonly parent?: ObjectId;

  readonly details?: string;

  readonly image?: string;

  readonly icon?: string;

  readonly type?: string;
}
