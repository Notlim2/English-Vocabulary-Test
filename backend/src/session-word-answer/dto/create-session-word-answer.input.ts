import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class CreateSessionWordAnswerInput {
  @Field()
  @IsInt()
  @Min(1)
  sessionWordId: number;

  @Field()
  @IsNotEmpty()
  answer: string;
}
