import { Module } from '@nestjs/common';
import { SessionWordAnswerService } from './session-word-answer.service';
import { SessionWordAnswerResolver } from './session-word-answer.resolver';
import { SessionWordModule } from 'src/session-word/session-word.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, SessionWordModule],
  providers: [SessionWordAnswerResolver, SessionWordAnswerService],
  exports: [SessionWordAnswerService],
})
export class SessionWordAnswerModule {}
