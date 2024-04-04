import mongoose, { Schema, Document, Types } from 'mongoose'
import { placesInterface } from '../interfaces/places.interface'
import CommentModel from './comment.model'

const commentSchema = new Schema(
	{
		cid: { type: Types.ObjectId, ref: CommentModel }
	},
	{ _id: false }
)

const PlaceSchema = new Schema<placesInterface & Document>({
	id: { type: String },
	name: { type: String, required: true },
	location: { type: String, required: true },
	country: { type: String, required: true },
	commentsId: [commentSchema]
})

const PlaceModel = mongoose.model<placesInterface & Document>(
	'Place',
	PlaceSchema
)

export default PlaceModel
