'use client'

import Link from 'next/link'
import { redirect } from 'next/navigation'

import { LogOut } from 'lucide-react'

import { UserModel } from '@/types/models'
import { ThemeToggle } from '@/app/_components'
import { supabase } from '@/libs/supabase/supabase-client'

type Props = {
  user: UserModel
}

export const HeaderAdmin = ({ user }: Props) => {
  const userInitial = user?.email.split('@')[0][0]
  const userName = user?.name

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/')
  }

  const getCurrentHour = () => {
    const currentHour = new Date().getHours()

    if (currentHour >= 6 && currentHour < 12) {
      return 'Bom dia'
    }
    if (currentHour >= 12 && currentHour < 18) {
      return 'Boa tarde'
    } else {
      return 'Boa noite'
    }
  }

  return (
    <div className='navbar mt-2'>
      <div className='navbar-center flex'>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-bold text-primary'>
            <span>{getCurrentHour()}</span>, <span>{userName || userInitial}!</span>
          </h1>
          <p className='font font-light text-neutral'>
            {new Date().toLocaleString('pt-BR', { dateStyle: 'full' })}
          </p>
        </div>
      </div>
      <div className='navbar-end w-full'>
        <ThemeToggle />
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='flex items-center hover:cursor-pointer'>
            <div className='avatar placeholder'>
              <div className='w-10 rounded-full bg-primary'>
                <span className='text-xl text-primary-content'>{userInitial}</span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'>
            <li>
              <Link href='/admin/profile'>My profile</Link>
            </li>
            <li>
              <button onClick={handleLogout} className='text-error'>
                <LogOut size={18} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
