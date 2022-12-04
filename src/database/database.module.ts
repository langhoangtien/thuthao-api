import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({ exports: [DatabaseService], providers: [DatabaseService] })
export class DatabaseModule {
  // createOption():MongooseModuleOptions
}

// const databaseOptions = DataBaseModule.da;
// export MongooseModule.forRoot()
