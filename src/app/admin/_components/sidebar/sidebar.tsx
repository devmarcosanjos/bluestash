// import SidebarButton from './sidebar-button'

import { HouseIcon, PlusIcon } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className=' m-2 w-64 rounded-lg bg-base-100'>
      <div className='px-6 pb-1 pt-10'>
        <h1 className='text-xl font-light'>Categorias</h1>
      </div>
      <div className='flex flex-col gap-2 px-6'>
        <button className='btn border-none bg-white shadow-none'>
          <div className='flex flex-grow items-center gap-2'>
            <HouseIcon size={18} />
            <span className='font-light text-primary-content'>Home</span>
          </div>
          <div className='badge'>1</div>
        </button>

        <button className='btn border-none bg-white shadow-none'>
          <div className='flex flex-grow items-center gap-2 '>
            <HouseIcon size={18} />
            <span className='font-light text-primary-content '>Work</span>
          </div>
          <div className='badge'>3</div>
        </button>

        <button className='btn border-none bg-white shadow-none'>
          <div className='flex flex-grow items-center gap-2'>
            <HouseIcon size={18} />
            <span className='font-light text-primary-content '>Frella</span>
          </div>
          <div className='badge'>+9</div>
        </button>

        <button className='btn bg-base-200'>
          <div className='flex flex-grow items-center gap-2'>
            <PlusIcon size={18} />
            <span className='font-light text-primary-content '>Create new list</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
