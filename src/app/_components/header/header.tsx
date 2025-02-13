'use client'

import { AudioWaveform } from 'lucide-react'

export const Header = () => {
  return (
    <header className='flex w-full justify-center bg-transparent p-2 sm:p-4'>
      <div className='container flex w-full items-center justify-between gap-6 md:gap-8'>
        <div className='max-sm:hidden sm:flex-initial'>
          <ul className='flex gap-4 *:text-primary-content'>
            <li>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='/'>Preço</a>
            </li>
            <li>
              <a href='/'>FAQ</a>
            </li>
          </ul>
        </div>
        <div className='inline-flex items-center'>
          <AudioWaveform className='h-12 w-12 font-bold text-primary' />
          <h1 className='text-5xl font-extralight text-primary-content'>Bluestash</h1>
        </div>
        <div className='btn btn-primary'>
          {/* <Link href='/auth' className='text-primary-content'> */}
          Login
          {/* </Link> */}
        </div>
      </div>
    </header>
  )
}
