import { ReactNode } from 'react'

import { Metadata } from 'next'

import { HeaderAdmin } from '@/app/admin/_components'
import Sidebar from '@/app/admin/_components/sidebar/sidebar'
import { getCurrentUser } from '@/server/functions/user.function'
import TodoContextProvider from '@/app/admin/context/todo.contenxt'
import CategoryContextProvider from '@/app/admin/context/category.contenxt'

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
    <TodoContextProvider>
      <CategoryContextProvider>
        <div className='flex h-screen w-auto flex-row '>
          <Sidebar />
          <div className='relative mx-auto max-w-7xl flex-1  px-5'>
            <HeaderAdmin user={user} />
            {children}
          </div>
        </div>
      </CategoryContextProvider>
    </TodoContextProvider>
  )
}
