import Link from 'next/link'
import Image from 'next/image'

import {ArrowLeft} from 'lucide-react'

import {LoginForm} from './_components'

export default function Page() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-base-200'>
      <div className='flex w-[350px] flex-col rounded-lg bg-base-100 px-5 pb-6 pt-3 shadow-lg '>
        <Link href='./' title='Go back' className='btn btn-circle btn-ghost btn-sm'>
          <ArrowLeft size={18} />
        </Link>

        <div className='mb-5 flex justify-center text-center'>
          <Image alt='Logo' width={177} height={100} src='/logo/logo.svg' />
        </div>

        <LoginForm />

        <div className='divider text-xs'>OR</div>

        <Link href='#' className='btn btn-disabled btn-info text-white'>
          Login with Google
        </Link>
      </div>
    </div>
  )
}
