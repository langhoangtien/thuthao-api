import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
// import { UploadsResolver } from './uploads.resolver';
import { UploadsController } from './uploads.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema, File } from './schemas/file.schema';

@Module({
  providers: [UploadsService],
  controllers: [UploadsController],
  imports: [MongooseModule.forFeature([{ name: File.name, schema: FileSchema }])],
})
export class UploadsModule {}
