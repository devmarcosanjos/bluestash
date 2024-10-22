import Link from 'next/link'
import Image from 'next/image'

import {APP_URL} from '@/config/env-client'

export const Header = () => {
  return (
    <div className='navbar max-w-screen-lg bg-base-100'>
      <div className='navbar-start'>
        <Link href={APP_URL} className='btn btn-ghost text-xl'>
          <Image alt='Logo' width={120} height={80} src='/auth/logo.svg' />
        </Link>
      </div>
      <div className='navbar-end'>
        <Link href='/auth' className='btn btn-primary px-8'>
          Login
        </Link>
      </div>
    </div>
  )
}
