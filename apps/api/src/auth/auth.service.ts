import { CreateUserInput } from './../user/dto/create-user.input';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt';

import validateEmail from '../utils/validateEmail';
import LoginPayload from './entities/loginPayload';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { UserInputError } from '@nestjs/apollo';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }

  async register(input: CreateUserInput): Promise<LoginPayload> {
    const { email, firstName, lastName, password } = input;

    const isEmailValid = validateEmail(email);

    if (!isEmailValid) throw new UserInputError('Email Address invalid');

    const existingUser = await this.userService.doesEmailExist(email);

    if (existingUser) {
      throw new UserInputError('Email address has already been taken!');
    }

    const hashedPassword = await this.hashPassword(password);
    const newUser = await this.userService.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    const { _id } = newUser;

    const authToken = this.jwtService.sign(
      { i: newUser._id.toString() },
      { secret: this.configService.get<string>('JWT_SECRET') },
    );

    return {
      authToken,
      profile: {
        _id: _id.toString(),
        lastName: newUser.lastName,
        firstName: newUser.firstName,
        email: newUser.email,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
    };
  }

  async login(email: string, password: string): Promise<LoginPayload> {
    const user = await this.userService.findOne({ email });

    if (!user) throw new UserInputError('Invalid login credentials');

    const isMatched = await compare(password, user.password);

    if (!isMatched) throw new UserInputError('Invalid login credentials');

    return {
      authToken: this.jwtService.sign(
        { i: user._id.toString() },
        { secret: this.configService.get<string>('JWT_SECRET') },
      ),
      profile: user,
    };
  }
}
