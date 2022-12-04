import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService) {}
  createOptions(): MongooseModuleOptions {
    const data = {
      username: this.configService.get('database.username'),
      name: this.configService.get('database.name'),
      password: this.configService.get('database.password'),
      extra: this.configService.get('database.extra'),
    };
    const uri = `mongodb+srv://${data.username}:${data.password}@${data.name}.extwodp.mongodb.net/${data.extra}`;
    return {
      uri,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      autoCreate: true,
    };
  }
}
