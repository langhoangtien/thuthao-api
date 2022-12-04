import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsernameOrEmail(username);
    if (!user) return null;
    const check = await checkUser(pass, user.password);
    if (check) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  getHello(): string {
    return 'Hello World!';
  }
}

async function checkUser(password: string, passwordHash: string) {
  const match = await bcrypt.compare(password, passwordHash);
  return match;
}
