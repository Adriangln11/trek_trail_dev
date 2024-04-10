import mongoose, { Schema, Document } from 'mongoose';
import { tripsInterface } from '../interfaces/trips.interface';
import commentModel from './comment.model';
import userModel from './user.model';
import placeModel from './place.model';


const commentSchema = new Schema({
  cid: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
}, { _id: false });

const photoSchema = new Schema({
  originalName: String,
  URL: String
})

const TripSchema: any = new Schema<tripsInterface>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:  { type: String, required: true },
  comments: [commentSchema],
  placeId: { type: mongoose.Schema.Types.ObjectId, ref: placeModel, required: true },
  description: { type: String, required: true },
  stars:  { type: Number, min: 1, max: 5, required: true },
  photo: [photoSchema],
  date: { type: Date, default: Date.now() },
});


export default mongoose.model('Trip', TripSchema);