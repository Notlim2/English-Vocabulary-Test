import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserInput) {
    const hashed = await bcrypt.hash(data.password, bcrypt.genSaltSync());
    return this.prisma.user.create({
      data: { ...data, password: hashed, createdAt: new Date() },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
