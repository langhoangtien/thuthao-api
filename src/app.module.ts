import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import configuration from './config/configuration';
import databaseConfig from './config/databaseConfig';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
// import { ConfigService } from './config/config.service';
// import { ConfigModule } from './config/config.module';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CouponsService } from './coupons/coupons.service';
import { CouponsModule } from './coupons/coupons.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    AuthModule,
    CatsModule,
    UsersModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      inject: [DatabaseService],
      useFactory: (databaseService: DatabaseService) => databaseService.createOptions(),
    }),
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    CouponsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, CouponsService],
})
export class AppModule implements NestModule {
  constructor(private configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
