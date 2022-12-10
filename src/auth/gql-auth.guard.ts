import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthenticationError } from 'apollo-server-core';

@Injectable()
export class GraphqlAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    console.log('DJFJ');

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    request.body = ctx.getArgs().input;
    return request;
  }

  // handleRequest(err: any, user: any, info: any) {
  //   if (err || !user) {
  //     throw err || new AuthenticationError('Could not authenticate with token');
  //   }

  //   return user;
  // }
}
