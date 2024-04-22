export interface Place {
  id: string
  name: string
  city: {
    _id: string
    name: string
    location: string
    image: string[]
    places: string[]
  }
  image: string
  trip: string[]
  stars: string[]
  description: string
  average: number
}
