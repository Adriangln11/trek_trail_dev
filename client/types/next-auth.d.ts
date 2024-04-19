import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      name: string
      email: string
      token: string
      image: string
      comments: Array<>
      trips: Array<>
      country: string
      first_name: string
      last_name: string
      id: string
      letter: string
    }
  }
}
