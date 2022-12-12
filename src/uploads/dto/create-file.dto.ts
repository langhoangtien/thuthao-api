export class CreateFileDto {
  readonly uri: string;

  readonly originalname: string;

  readonly encoding: string;

  readonly destination: string;

  readonly filename: string;

  readonly path: string;

  readonly size: number;

  readonly mimetype: string;

  readonly userId: string;
}
