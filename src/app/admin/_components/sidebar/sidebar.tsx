// import SidebarButton from './sidebar-button'

import Link from 'next/link'
import Image from 'next/image'

import { HouseIcon, PlusIcon } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className=' m-2 w-64 rounded-lg bg-base-100'>
      {/* logo */}
      <div className='navbar-start flex w-full items-center justify-center px-6 pb-10 pt-6'>
        <Link href='/admin' className='text-xl'>
          <Image alt='Logo' width={120} height={80} src='/logo/logo.svg' />
        </Link>
      </div>

      {/* butons */}
      <div className='flex flex-col gap-2 px-6'>
        <Link href='/admin' className='flex w-full'>
          <button className='btn flex-1 border-none bg-white shadow-none'>
            <div className='flex flex-grow items-center gap-2'>
              <HouseIcon size={18} />
              <span className='font-light text-primary-content'>TodoList</span>
            </div>
            <div className='badge'>1</div>
          </button>
        </Link>

        <Link href='#' className='flex w-full'>
          <button className='btn border-none bg-white shadow-none'>
            <div className='flex flex-grow items-center gap-2 '>
              <HouseIcon size={18} />
              <span className='font-light text-primary-content '>Work</span>
            </div>
            <div className='badge'>3</div>
          </button>
        </Link>
        <Link href='#' className='flex w-full'>
          <button className='btn border-none bg-white shadow-none'>
            <div className='flex flex-grow items-center gap-2'>
              <HouseIcon size={18} />
              <span className='font-light text-primary-content '>Frella</span>
            </div>
            <div className='badge'>+9</div>
          </button>
        </Link>
        <Link href='#' className='flex w-full'>
          <button className='btn bg-base-200'>
            <div className='flex flex-grow items-center gap-2'>
              <PlusIcon size={18} />
              <span className='font-light text-primary-content '>Create new list</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
