import { ObjectType, Field } from '@nestjs/graphql';
import Profile from './profile';

@ObjectType()
export default class LoginPayload {
  @Field()
  authToken: string;

  @Field()
  profile: Profile;
}
