import mongoose, { Schema, Document } from 'mongoose';
import { UserInterface } from '../interfaces/user.interface';
import commentModel from './comment.model';
import tripModel from './trip.model';


const favoritasSchema = new Schema({
  tid: { type: mongoose.Schema.Types.ObjectId, ref: tripModel }
}, { _id: false });

const UserSchema = new Schema<UserInterface>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
  favorites: [favoritasSchema],
  role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
  avatar: {type:String},
  last_connection: { type: Date, default: Date.now() },
  status: {type: String, enum:['ACTIVE', 'INACTIVE'], default: 'INACTIVE'}
});

export default mongoose.model('User', UserSchema);
