export interface GetTrip {
  id: string
  userId: string
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
