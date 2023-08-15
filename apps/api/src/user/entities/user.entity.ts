import { ObjectType, Field, ID } from '@nestjs/graphql';
import Node from '../../common/entities/node.entity';

@ObjectType({ implements: [Node] })
export class User extends Node {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
