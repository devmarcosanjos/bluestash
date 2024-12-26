import { ReactNode } from 'react'

import { Metadata } from 'next'

import { getCurrentUser } from '@/server/functions/user.function'
import InputProfile from '@/app/admin/profile/components/input-profile/inputProfile'

export const metadata: Metadata = {
  title: 'Profile',
  description: '',
}

type Props = {
  children: ReactNode
}

export default async function Layout({ children }: Props) {
  const user = await getCurrentUser()

  // const handleDeleteAccount = async () => {
  //   try {
  //     await deleteUserAccount(user.id)
  //     console.log('Conta deletada com sucesso', user.id)
  //   } catch (error) {
  //     console.error('Erro ao deletar conta', error)
  //   }
  // }

  return (
    <div>
      <InputProfile user={user} />
      {children}
    </div>
  )
}
