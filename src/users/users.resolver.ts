import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserInput } from './dto/create-user.input';
import { LoginInput } from '../auth/dto/login.input';

import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  createUser(@Args('input') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }
}
