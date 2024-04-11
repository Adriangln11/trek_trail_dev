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

const avatarSchema = new Schema({
  originalname: String,
  URL: String
})

const UserSchema = new Schema<UserInterface>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
<<<<<<< HEAD
  comments: [commentSchema],
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
=======
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  trips: [tripSchema],
>>>>>>> origin/Backend---Angel
  favorites: [favoritasSchema],
  role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
  avatar: [avatarSchema],
  last_connection: { type: Date, default: Date.now() },
  status: {type: String, enum:['ACTIVE', 'INACTIVE'], default: 'INACTIVE'}
});

export default mongoose.model('User', UserSchema);
