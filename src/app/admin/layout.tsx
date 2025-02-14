import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { Metadata } from 'next'

import { HeaderAdmin } from '@/app/admin/_components'
import Sidebar from '@/app/admin/_components/sidebar/sidebar'
import { getCurrentUser } from '@/server/functions/user.function'

import 'react-toastify/dist/ReactToastify.css'
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
    <div data-theme='blueStash' className='flex h-screen w-auto flex-row'>
      <ToastContainer position='top-right' />

      <Sidebar />
      <div className='relative mx-auto max-w-7xl flex-1  px-5'>
        <HeaderAdmin user={user} />
        {children}
      </div>
    </div>
  )
}
