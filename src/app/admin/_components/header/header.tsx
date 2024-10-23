import Link from 'next/link'
import Image from 'next/image'

import {LogOut} from 'lucide-react'

import {UserModel} from '@/types/models'

type Props = {
  user: UserModel
}

export const HeaderAdmin = ({user}: Props) => {
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
            <span className='mr-2 font-bold'>{user?.email}</span>
            <div className='avatar'>
              <div className='w-10 rounded-full'>
                <Image
                  width={40}
                  height={40}
                  alt='Profile picture'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'>
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
