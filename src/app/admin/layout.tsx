import { ReactNode } from 'react'

import { Metadata } from 'next'

import { HeaderAdmin } from '@/app/admin/_components'
import Sidebar from '@/app/admin/_components/sidebar/sidebar'
import { getCurrentUser } from '@/server/functions/user.function'

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
    <div className='flex h-screen w-full flex-row'>
      <Sidebar />
      <div className='flex-1 px-5'>
        <HeaderAdmin user={user} />
        {children}
      </div>
    </div>
  )
}
