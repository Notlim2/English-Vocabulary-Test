import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SessionWord } from 'src/session-word/entities/session-word.entity';

@ObjectType()
export class SessionWordAnswer {
  @Field(() => ID)
  id: number;

  @Field()
  answer: string;

  @Field()
  isCorrect: boolean;

  @Field(() => SessionWord)
  sessionWord: SessionWord;

  @Field()
  createdAt: Date;
}
