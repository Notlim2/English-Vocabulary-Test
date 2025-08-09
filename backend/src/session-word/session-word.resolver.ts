import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SessionWordService } from './session-word.service';
import { SessionWord } from './entities/session-word.entity';
import { CreateSessionWordInput } from './dto/create-session-word.input';

@Resolver(() => SessionWord)
export class SessionWordResolver {
  constructor(private readonly sessionWordService: SessionWordService) {}

  @Mutation(() => SessionWord)
  createSessionWord(
    @Args('data')
    data: CreateSessionWordInput,
  ) {
    return this.sessionWordService.create(data);
  }
}
