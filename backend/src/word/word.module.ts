import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordResolver } from './word.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WordResolver, WordService],
  exports: [WordService],
})
export class WordModule {}
