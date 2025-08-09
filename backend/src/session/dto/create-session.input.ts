import { InputType, Field } from '@nestjs/graphql';
import { DifficultLevel } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, Min } from 'class-validator';

@InputType()
export class CreateSessionInput {
  @Field()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  minutes: number;

  @Field()
  @IsEnum(DifficultLevel)
  difficult: DifficultLevel;
}
