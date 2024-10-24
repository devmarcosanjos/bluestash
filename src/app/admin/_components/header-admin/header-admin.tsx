import Link from 'next/link'
import Image from 'next/image'

import {LogOut} from 'lucide-react'

import {UserModel} from '@/types/models'

type Props = {
  user: UserModel
}

export const HeaderAdmin = ({user}: Props) => {
  const userInitial = user?.email.split('@')[0][0]

  return (
    <div className='navbar bg-base-300'>
      <div className='navbar-start'>
        <Link href='/admin' className='btn btn-ghost text-xl'>
          <Image alt='Logo' width={120} height={80} src='/logo/logo.svg' />
        </Link>
      </div>
      <div className='navbar-center flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/admin/todo'>Todo</Link>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
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
              <button className='text-error'>
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
