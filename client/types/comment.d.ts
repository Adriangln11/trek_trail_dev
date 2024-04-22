interface Comment {
  id: string
  userId: string
  date: string
  respondsId: string[]
  text: string
  tripId: {
    activity: string
    comments: string[]
    date: string
    description: string
    name: string
    placeId: string
    stars: number
    userId: string
    id: string
  }
}
