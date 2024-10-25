'use client'

import Link from 'next/link'
import Image from 'next/image'

import {Moon, Sun} from 'lucide-react'
import {observer} from 'mobx-react-lite'

import {APP_URL} from '@/config/env-client'
import {themeStore} from '@/app/_stores/theme.store'

export const Header = observer(() => {
  return (
    <div className='navbar max-w-screen-lg bg-base-100'>
      <div className='navbar-start'>
        <Link href={APP_URL} className='btn btn-ghost text-xl'>
          <Image alt='Logo' width={120} height={80} src='/logo/logo.svg' />
        </Link>
      </div>

      <div className='navbar-end'>
        <label className='swap swap-rotate ml-2 mr-2'>
          <input
            value='dark'
            type='checkbox'
            className='theme-controller'
            onChange={() => themeStore.toggle()}
            checked={themeStore.theme != 'default'}
          />
          <Sun size={25} className='swap-off  fill-current' />
          <Moon size={25} className='swap-on  fill-current' />
        </label>
        <Link href='/auth' className='btn btn-primary px-8'>
          Login
        </Link>
      </div>
    </div>
  )
})
