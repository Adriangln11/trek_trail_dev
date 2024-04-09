import { ObjectId } from "mongoose";

export interface tripsInterface {
    id?: string,
    userId: ObjectId,
    comments?: Array<ObjectId>,
    date: Date,
    description: String,
    placeId: ObjectId
}