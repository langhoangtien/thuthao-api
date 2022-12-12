import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuardGql } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/get-current-user';
import { CatsService } from 'src/cats/cats.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService, private catsService: CatsService) {}

  @UseGuards(JwtAuthGuardGql)
  @Query(() => [User], { name: 'users' })
  async users(@CurrentUser() user: User) {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(@Args('input') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @ResolveField()
  async cats(@Parent() user: User) {
    const { _id } = user;
    return this.catsService.find(_id);
  }
}
