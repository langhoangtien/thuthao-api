import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';
import { AuthService } from './auth.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login.response';
import { CurrentUser } from './get-current-user';
import { GraphqlAuthGuard } from './gql-auth.guard';
import { JwtAuthGuardGql } from './jwt-auth.guard';
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

  @UseGuards(JwtAuthGuardGql)
  @Mutation(() => User)
  changePassword(@Args('input') changePasswordInput: ChangePasswordInput, @CurrentUser() user) {
    return this.authService.changePassword(changePasswordInput, user.userId);
  }
}
