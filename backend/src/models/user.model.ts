import mongoose, { Schema, Document } from 'mongoose';
import { UserInterface } from '../interfaces/user.interface';
import commentModel from './comment.model';
import tripModel from './trip.model';

const commentSchema = new Schema({
  cid: { type: mongoose.Schema.Types.ObjectId, ref: commentModel }
}, { _id: false });

const tripSchema = new Schema({
  tid: { type: mongoose.Schema.Types.ObjectId, ref: tripModel }
}, { _id: false });

const favoritasSchema = new Schema({
  tid: { type: mongoose.Schema.Types.ObjectId, ref: tripModel }
}, { _id: false });

const UserSchema = new Schema<UserInterface>({
  id: { type: String },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  trips: [tripSchema],
  favorites: [favoritasSchema],
  role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
  last_connection: { type: Date, default: Date.now() }
});

export default mongoose.model('User', UserSchema);
