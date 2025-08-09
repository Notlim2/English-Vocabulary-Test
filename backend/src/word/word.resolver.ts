import { Mutation, Resolver } from '@nestjs/graphql';
import { WordService } from './word.service';
import { Word } from './entities/word.entity';

@Resolver()
export class WordResolver {
  constructor(private readonly wordService: WordService) {}

  @Mutation(() => [Word])
  listWords(): Promise<Word[]> {
    return this.wordService.list();
  }

  @Mutation(() => Word)
  randomWord(): Promise<Word | null> {
    return this.wordService.random();
  }
}
