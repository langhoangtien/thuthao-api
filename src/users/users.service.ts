import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

async function hashPass(pass) {
  const saltOrRounds = 10;
  return await bcrypt.hash(pass, saltOrRounds);
}

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hash = await hashPass(createUserDto.password);
    const createUser = { ...createUserDto, role: 1, password: hash };
    const createdCat = await this.userModel.create(createUser);
    return createdCat;
  }

  async updatePassword(password: string, id: string): Promise<User> {
    console.log('PASS', password, id);

    const hash = await hashPass(password);
    const user = await this.userModel.findById(id);
    user.password = hash;
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().select('-password').exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).select('-password').exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findOneByUsernameOrEmail(value: string, select = ''): Promise<User> {
    return this.userModel.findOne({ username: value }).select(select).lean().exec();
  }

  async findOneByProperty({ name, value }): Promise<User> {
    return this.userModel.findOne({ [name]: value }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.userModel.findByIdAndRemove({ _id: id }).exec();
    return deletedCat;
  }
}
