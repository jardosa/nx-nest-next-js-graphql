import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommonService } from './common.service';
import { Common } from './entities/common.entity';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';
import { ConfigService } from '@nestjs/config';

@Resolver(() => Common)
export class CommonResolver {
  constructor(
    private readonly commonService: CommonService,
    private readonly configService: ConfigService
    
    ) {}

  @Query(() => String)
  ping() {
    return 'pong';
  }

  @Query(() => Number)
  port() {
    return this.configService.get<number>('PORT');
  }

  @Mutation(() => String)
  echo(@Args('message') message: string) {
    return message;
  }
}
