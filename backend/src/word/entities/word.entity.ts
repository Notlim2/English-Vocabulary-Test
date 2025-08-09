import { ObjectType, Field, ID } from '@nestjs/graphql';
import { DifficultLevel } from '@prisma/client';

@ObjectType()
export class Word {
  @Field(() => ID)
  id: number;

  @Field()
  term: string;

  @Field()
  definition: string;

  @Field()
  example: string;

  @Field()
  difficult: DifficultLevel;
}
