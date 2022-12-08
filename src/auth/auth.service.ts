import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginInput } from './dto/login.input';
import { RegisterInput } from './dto/register.input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser({ username, password }: LoginInput): Promise<any> {
    const user = await this.usersService.findOneByUsernameOrEmail(username);

    if (!user) return null;
    const check = await checkUser(password, user.password);

    if (check) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async register(registerInput: RegisterInput) {
    const createUserDto = { ...registerInput, role: 1 };
    const user = await this.usersService.create(createUserDto);
    const { password, ...result } = user;
    console.log('CCCC', result);

    return { user: result };
  }

  async login(loginInput: LoginInput) {
    const user = await this.usersService.findOneByUsernameOrEmail(loginInput.username);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
  getHello(): string {
    return 'Hello World!';
  }
}

async function checkUser(password: string, passwordHash: string) {
  return await bcrypt.compare(password, passwordHash);
}
