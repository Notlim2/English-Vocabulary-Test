import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async register(@Args('data') data: CreateUserInput) {
    return this.userService.create(data);
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: { userId: number }) {
    return this.userService.findById(user.userId);
  }
}
