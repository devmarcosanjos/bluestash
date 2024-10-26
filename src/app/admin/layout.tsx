import { ReactNode } from 'react'

import { Metadata } from 'next'

import { getCurrentUser } from '@/server/functions/user.function'

import { HeaderAdmin } from './_components'
export const metadata: Metadata = {
  description: '',
  title: 'Admin',
}

type Props = {
  children: ReactNode
}

export default async function Layout({ children }: Props) {
  const user = await getCurrentUser()

  return (
    <div className='flex h-screen w-full flex-col items-center'>
      <HeaderAdmin user={user} />
      <div className='flex w-full flex-1 justify-center p-5'>{children}</div>
    </div>
  )
}
