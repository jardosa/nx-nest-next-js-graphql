import { ObjectType, Field } from '@nestjs/graphql';
import TimeStamps from '../../common/entities/timestamps';
import Node from '../../common/entities/node.entity';

@ObjectType({ implements: [Node, TimeStamps] })
export default class Profile extends Node implements TimeStamps {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
