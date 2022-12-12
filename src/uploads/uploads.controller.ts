import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { uploadOptions } from 'src/auth/helper/upload.options';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UploadsService } from './uploads.service';
@UseGuards(JwtAuthGuard)
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}
  @Post()
  @UseInterceptors(FilesInterceptor('files', 10, uploadOptions()))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Req() req) {
    const url = `${req.protocol}://${req.get('Host')}`;
    return files.map((file) => `${url}/static/${file.filename}`);
  }

  @Post('/single')
  @UseInterceptors(FileInterceptor('file', uploadOptions()))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
    const uri = `${req.protocol}://${req.get('Host')}`;
    const userId = req.user ? req.user.userId : '';

    const createFileDto = { ...file, uri, userId };
    this.uploadsService.create(createFileDto);
    return `${uri}/static/${file.filename}`;
  }
}
