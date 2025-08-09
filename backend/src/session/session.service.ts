import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSessionInput } from './dto/create-session.input';
import { GetSessionInput } from './dto/get-session.input';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  list() {
    return this.prisma.session.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        sessionWords: {
          include: {
            word: true,
            sessionWordAnswers: {
              include: { sessionWord: { include: { word: true } } },
            },
          },
        },
      },
    });
  }

  findById(data: GetSessionInput) {
    return this.prisma.session.findFirst({
      where: { id: data.id },
      include: {
        sessionWords: {
          include: {
            word: true,
            sessionWordAnswers: {
              include: { sessionWord: { include: { word: true } } },
            },
          },
        },
      },
    });
  }

  async create(currentUser: { userId: number }, data: CreateSessionInput) {
    const { userId } = currentUser;
    const { difficult, minutes } = data;
    const startDate = new Date();
    const endDate = new Date(
      new Date(startDate).setMinutes(startDate.getMinutes() + minutes),
    );
    const user = await this.prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }
    return this.prisma.session.create({
      data: {
        difficult,
        startDate,
        endDate,
        userId,
        createdAt: new Date(),
      },
      include: {
        sessionWords: {
          include: {
            word: true,
            sessionWordAnswers: {
              include: { sessionWord: { include: { word: true } } },
            },
          },
        },
      },
    });
  }
}
