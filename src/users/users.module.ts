import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { IsFieldAlreadyExistConstraint } from 'src/validate/validate.service';
import { UsersResolver } from './users.resolver';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  providers: [UsersService, IsFieldAlreadyExistConstraint, UsersResolver],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), CatsModule],
})
export class UsersModule {}
