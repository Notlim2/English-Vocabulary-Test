import { Injectable } from '@nestjs/common';
import { CreateSessionWordAnswerInput } from './dto/create-session-word-answer.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionWordService } from 'src/session-word/session-word.service';

@Injectable()
export class SessionWordAnswerService {
  constructor(
    private prisma: PrismaService,
    private sessionWordService: SessionWordService,
  ) {}

  async create(data: CreateSessionWordAnswerInput) {
    const { sessionWordId, answer } = data;
    const sessionWord = await this.sessionWordService.findById(sessionWordId, {
      word: true,
    });
    if (!sessionWord?.word) {
      return;
    }
    return this.prisma.sessionWordAnswer.create({
      data: {
        sessionWordId,
        answer,
        isCorrect:
          sessionWord.word.term.trim().toLocaleLowerCase() ===
          answer.trim().toLocaleLowerCase(),
        createdAt: new Date(),
      },
      include: {
        sessionWord: {
          include: {
            word: true,
          },
        },
      },
    });
  }
}
