import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
      name: string
      token: string
      image: string
    }
  }
}
