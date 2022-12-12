import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/schemas/user.schema';

export type FileDocument = HydratedDocument<File>;

@Schema()
export class File extends CoreEntity {
  @Prop()
  uri: string;
  @Prop()
  originalname: string;
  @Prop()
  encoding: string;
  @Prop()
  destination: string;
  @Prop()
  filename: string;
  @Prop()
  path: string;
  @Prop()
  size: number;
  @Prop()
  mimetype: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const FileSchema = SchemaFactory.createForClass(File);
