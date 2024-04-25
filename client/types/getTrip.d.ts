export interface GetTrip {
  id: string
  userId: {
    _id: string
    comments?: []
    country: string
    email: string
    favorites: []
    first_name: string
    last_name: string
    last_connection: string
    role: string
    trips: []
  }
  name: string
  description: string
  stars: number
  activity: string
  photo: string
  date: string
  comments: []
  placeId: {
    id: string
    city: string
    description: string
    image: string
    name: string
    stars: [{ rating: number; uid: string }]
    trip: string[]
  }
}
