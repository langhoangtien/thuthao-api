import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    // createUserDto.password = hash;
    const createUser = { ...createUserDto, role: 1, password: hash };
    const createdCat = await this.userModel.create(createUser);
    return createdCat;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().select('-password').exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).select('-password').exec();
  }

  async findOneByUsernameOrEmail(value): Promise<User> {
    return this.userModel.findOne({ username: value }).exec();
  }

  async findOneByProperty({ name, value }): Promise<User> {
    return this.userModel.findOne({ [name]: value }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.userModel.findByIdAndRemove({ _id: id }).exec();
    return deletedCat;
  }
}
