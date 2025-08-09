import { ObjectType, Field, ID } from '@nestjs/graphql';
import { DifficultLevel } from '@prisma/client';
import { SessionWord } from 'src/session-word/entities/session-word.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Session {
  @Field(() => ID)
  id: number;

  @Field(() => User)
  user: User;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  difficult: DifficultLevel;

  @Field(() => [SessionWord])
  sessionWords: SessionWord[] | null;

  @Field()
  createdAt: Date;
}
