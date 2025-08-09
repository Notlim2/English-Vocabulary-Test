import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SessionService } from './session.service';
import { Session } from './entities/session.entity';
import { CreateSessionInput } from './dto/create-session.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GetSessionInput } from './dto/get-session.input';

@UseGuards(JwtAuthGuard)
@Resolver()
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}

  @Mutation(() => Session)
  createSession(
    @CurrentUser() user: { userId: number },
    @Args('data') data: CreateSessionInput,
  ) {
    return this.sessionService.create(user, data);
  }

  @Query(() => [Session])
  listSessions() {
    return this.sessionService.list();
  }

  @Query(() => Session)
  getSession(@Args('data') data: GetSessionInput) {
    return this.sessionService.findById(data);
  }
}
