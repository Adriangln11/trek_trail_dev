import { ObjectId } from 'mongoose'
import { placesInterface } from '../interfaces/places.interface'

export default class PlaceDTO {
	id: string
	name: string
	location: string
	country: string
	comments: Array<any>

	constructor(place: placesInterface) {
		this.id = place.id
		this.name = place.name
		this.location = place.location
		this.country = place.country
		this.comments = place.comments || []
	}
}
