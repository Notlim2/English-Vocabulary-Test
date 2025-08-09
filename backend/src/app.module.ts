import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { WordModule } from './word/word.module';
import { SessionModule } from './session/session.module';
import { SessionWordModule } from './session-word/session-word.module';
import { SessionWordAnswerModule } from './session-word-answer/session-word-answer.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WordModule,
    SessionModule,
    SessionWordModule,
    SessionWordAnswerModule,
  ],
})
export class AppModule {}
