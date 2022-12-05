import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login.response';
import { GraphqlAuthGuard } from './gql-auth.guard';
// import { LocalAuthGuard } from './local-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => LoginResponse)
  login(@Args('input') loginInput: LoginInput) {
    return this.authService.login(loginInput);

    // return this.authService.login()
  }
}
