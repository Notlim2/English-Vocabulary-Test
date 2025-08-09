import { Module } from '@nestjs/common';
import { SessionWordService } from './session-word.service';
import { SessionWordResolver } from './session-word.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WordModule } from 'src/word/word.module';

@Module({
  imports: [PrismaModule, WordModule],
  providers: [SessionWordResolver, SessionWordService],
  exports: [SessionWordService],
})
export class SessionWordModule {}
