import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SessionWordAnswer } from 'src/session-word-answer/entities/session-word-answer.entity';
import { Session } from 'src/session/entities/session.entity';
import { Word } from 'src/word/entities/word.entity';

@ObjectType()
export class SessionWord {
  @Field(() => ID)
  id: number;

  @Field(() => Word)
  word: Word;

  @Field(() => Session)
  session: Session;

  @Field(() => [SessionWordAnswer])
  sessionWordAnswers: SessionWordAnswer[];

  @Field()
  createdAt: Date;
}
