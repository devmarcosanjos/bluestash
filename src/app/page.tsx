import Link from 'next/link'

import {prisma} from '@/libs/prisma/config'

export default async function Home() {
  const res = await prisma.users.findFirst({
    where: {
      id: {
        equals: 1,
      },
    },
  })

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
