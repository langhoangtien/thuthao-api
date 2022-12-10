import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/get-current-user';
import { JwtAuthGuardGql } from 'src/auth/jwt-auth.guard';
import { GraphqlAuthGuard } from '../auth/gql-auth.guard';
import { CatsService } from './cats.service';
import { CreateCatInput } from './dto/create-cat.input';
import { Cat } from './models/cat.model';

@UseGuards(JwtAuthGuardGql)
@Resolver(() => Cat)
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query(() => Cat)
  async cat(@Args('id') id: string) {
    return this.catsService.findOne(id);
  }
  @Query(() => [Cat], { name: 'cats' })
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => Cat)
  createCat(@Args('input') createCatInput: CreateCatInput, @CurrentUser() user) {
    const createCatData = { ...createCatInput, userId: user.userId };
    return this.catsService.create(createCatData);
  }

  // @ResolveField()
  // async users(@Parent() cat: Cat) {
  //   console.log('CAT', cat);

  //   //   const { id } = cat;
  //   //   return this.catsService.findAll({  id });
  // }
}
