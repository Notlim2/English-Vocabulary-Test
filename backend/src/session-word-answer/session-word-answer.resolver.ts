import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SessionWordAnswerService } from './session-word-answer.service';
import { SessionWordAnswer } from './entities/session-word-answer.entity';
import { CreateSessionWordAnswerInput } from './dto/create-session-word-answer.input';

@Resolver(() => SessionWordAnswer)
export class SessionWordAnswerResolver {
  constructor(
    private readonly sessionWordAnswerService: SessionWordAnswerService,
  ) {}

  @Mutation(() => SessionWordAnswer)
  createSessionWordAnswer(@Args('data') data: CreateSessionWordAnswerInput) {
    return this.sessionWordAnswerService.create(data);
  }
}
