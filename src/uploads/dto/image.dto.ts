import { ImageSizeAndType } from 'src/validate/validate.service';
export class UploadImageDto {
  @ImageSizeAndType()
  files: any[];
}
