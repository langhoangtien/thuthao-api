import { Module } from '@nestjs/common';
// import { UploadsService } from './uploads.service';
// import { UploadsResolver } from './uploads.resolver';
import { UploadsController } from './uploads.controller';

@Module({
  // providers: [UploadsResolver, UploadsService],

  controllers: [UploadsController]
})
export class UploadsModule {}
