import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginInput } from './dto/login.input';
import { ChangePasswordInput } from './dto/change-password.input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser({ username, password }: LoginInput): Promise<any> {
    const user = await this.usersService.findOneByUsernameOrEmail(username);

    if (!user) return null;
    const check = await checkUser(password, user.password);

    if (check) {
      // const { password, _id, ...result } = user;

      return user;
    }
    return null;
  }

  async login(loginInput: LoginInput) {
    const user = await this.usersService.findOneByUsernameOrEmail(loginInput.username, '-password');

    const payload = { username: user.username, sub: user._id.toString() };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async changePassword(changePasswordInput: ChangePasswordInput, id: string) {
    const user = await this.usersService.findById(id);
    if (!user) return null;
    const check = await checkUser(changePasswordInput.oldPassword, user.password);

    if (check) return this.usersService.updatePassword(changePasswordInput.password, id);
  }

  getHello(): string {
    return 'Hello a World!';
  }
}

async function checkUser(password: string, passwordHash: string) {
  return await bcrypt.compare(password, passwordHash);
}
