import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

@InputType()
export class GetSessionInput {
  @Field()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  id: number;
}
