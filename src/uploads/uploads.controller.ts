import { Controller, Post, Req, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { saveImage } from 'src/auth/helper/image-stogare';
@Controller('uploads')
export class UploadsController {
  @Post()
  @UseInterceptors(FilesInterceptor('files', 10, saveImage))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Req() req: Request) {
    const url = `${req.protocol}://${req.get('Host')}`;
    return files.map((file) => `${url}/static/${file.filename}`);
  }
}
