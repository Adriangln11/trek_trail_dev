import mongoose, { Schema, Document, Types } from 'mongoose'
import { placesInterface } from '../interfaces/places.interface'
import userModel from './user.model';

const starsSchema = new  Schema({
	rating: Number,
	uid: {type: mongoose.Schema.Types.ObjectId, ref: userModel}
}, {'_id': false});

const PlaceSchema = new Schema<placesInterface & Document>({
	id: { type: String },
	name: { type: String, required: true },
	location: { type: String, required: true },
	country: { type: String, required: true },
	image: { type: String },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	stars: [starsSchema]
})

export default mongoose.model('Place', PlaceSchema);
