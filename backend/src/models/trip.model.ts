import mongoose, { Schema, Document } from 'mongoose';
import { tripsInterface } from '../interfaces/trips.interface';
import commentModel from './comment.model';
import userModel from './user.model';
import placeModel from './place.model';

const commentSchema = new Schema({
  cid: { type: mongoose.Schema.Types.ObjectId, ref: commentModel }
}, { _id: false });

const TripSchema: any = new Schema<tripsInterface>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
  placeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  date: { type: Date, default: Date.now() },
});


export default mongoose.model('Trip', TripSchema);