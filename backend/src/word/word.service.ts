import { Injectable } from '@nestjs/common';
import { DifficultLevel } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.word.findMany();
  }

  async random(params?: { difficult?: DifficultLevel }) {
    let where: { difficult?: DifficultLevel } = {};
    if (params?.difficult) {
      where.difficult = params.difficult;
    }
    const count = await this.prisma.word.count({ where });
    const randomOffset = Math.floor(Math.random() * count);
    return this.prisma.word.findFirst({ where, skip: randomOffset });
  }
}
