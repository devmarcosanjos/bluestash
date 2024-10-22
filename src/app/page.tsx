import Link from 'next/link'

import {loadUserData} from '@/server/functions/user.function'

export default async function Home() {
  const res = await loadUserData()

  console.log({res})

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h1>Home page</h1>
      <Link href='/auth' className='btn btn-primary btn-wide'>
        Login
      </Link>
    </div>
  )
}
