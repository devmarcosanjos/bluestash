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

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/')
  }

  return (
    <div className='navbar mt-2'>
      <div className='navbar-center flex'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-secondary'>
            <span>Bom dia</span>, <span>Marcos!</span>
          </h1>
          <p className='font font-light'>01/11/2024</p>
        </div>
      </div>
      <div className='navbar-end w-full'>
        <ThemeToggle />
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='flex items-center hover:cursor-pointer'>
            <div className='avatar placeholder'>
              <div className='w-10 rounded-full bg-accent'>
                <span className='text-xl text-white'>{userInitial}</span>
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
