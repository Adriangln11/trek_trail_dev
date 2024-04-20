'use client'

import { useSession } from 'next-auth/react'

const ProfilePage = () => {
  const { data: session, status } = useSession()

  return <div>ProfilePage</div>
}

export default ProfilePage
