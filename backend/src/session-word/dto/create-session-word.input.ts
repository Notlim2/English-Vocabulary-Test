import { InputType, Field } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class CreateSessionWordInput {
  @Field()
  @IsInt()
  @Min(1)
  sessionId: number;
}
