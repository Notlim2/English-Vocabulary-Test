import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSessionWordInput } from './dto/create-session-word.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { WordService } from 'src/word/word.service';
import { SessionWord, Word } from '@prisma/client';

@Injectable()
export class SessionWordService {
  constructor(
    private prisma: PrismaService,
    private wordService: WordService,
  ) {}

  async create(data: CreateSessionWordInput) {
    const { sessionId } = data;
    const session = await this.prisma.session.findFirst({
      where: { id: sessionId },
    });
    if (!session) {
      throw new BadRequestException('Sessão não encontrada!');
    }
    const word = await this.wordService.random({
      difficult: session.difficult,
    });
    if (!word) {
      throw new BadRequestException('Palavra não encontrada!');
    }
    return this.prisma.sessionWord.create({
      data: { wordId: word.id, sessionId, createdAt: new Date() },
      include: { sessionWordAnswers: true, word: true },
    });
  }

  findById(
    id: number,
    include?: { word: boolean },
  ): Promise<(SessionWord & { word?: Word }) | null> {
    return this.prisma.sessionWord.findFirst({ where: { id }, include });
  }
}
