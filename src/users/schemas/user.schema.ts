import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CoreEntity } from 'src/common/entities/core.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends CoreEntity {
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
  @Prop()
  avatar: string;
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: mongoose.Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
