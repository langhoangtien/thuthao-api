import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFileDto } from './dto/create-file.dto';
import { File, FileDocument } from './schemas/file.schema';

@Injectable()
export class UploadsService {
  constructor(@InjectModel(File.name) private readonly uploadModel: Model<FileDocument>) {}

  async create(createFile: CreateFileDto): Promise<File> {
    return this.uploadModel.create(createFile);
  }
}
