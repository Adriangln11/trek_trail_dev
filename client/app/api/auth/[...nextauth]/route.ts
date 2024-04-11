import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { headers } from 'next/headers'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'placeholder' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log(credentials)
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch(
          'https://no-country-back.onrender.com/api/users/login',
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              passwords: credentials?.password,
            }),
            headers: { 'Content-Type': 'application/json' },
          }
        )
        const user = await res.json()
        console.log(user)

        if (user.error) throw user
        return user
      },
    }),
  ],
})

export { handler as GET, handler as POST }
