import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  role: number;

  @Prop()
  age?: number;

  @Prop()
  password: string;

  @Prop({ auto: true })
  _id!: mongoose.Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
