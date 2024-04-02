import mongoose, { Schema, Document } from 'mongoose';
import { UserInterface } from '../interfaces/user.interface';

const commentSchema = new Schema({
  cid: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
}, { _id: false });

const tripSchema = new Schema({
  tid: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }
}, { _id: false });

const UserSchema = new Schema<UserInterface>({
  id: { type: String },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  comments: [commentSchema],
  trips: [tripSchema],
  role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
  last_connection: { type: Date, default: Date.now() }
});

export default mongoose.model('User', UserSchema);
