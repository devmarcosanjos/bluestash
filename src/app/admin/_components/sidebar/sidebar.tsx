// import SidebarButton from './sidebar-button'

import { HouseIcon, PlusIcon } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className=' w-64 bg-base-300 '>
      <div className='px-8 py-1'>
        <h1 className='text-xl font-bold'>Categorias</h1>
      </div>
      <div className='flex flex-col gap-4 p-6'>
        <button className='btn'>
          <div className='flex flex-grow items-center gap-2'>
            <HouseIcon size={18} />
            <span className='text-primary-content'>Home</span>
          </div>
          <div className='badge'>1</div>
        </button>

        <button className='btn'>
          <div className='flex flex-grow items-center gap-2'>
            <HouseIcon size={18} />
            <span className='text-primary-content'>Work</span>
          </div>
          <div className='badge'>3</div>
        </button>

        <button className='btn'>
          <div className='flex flex-grow items-center gap-2'>
            <HouseIcon size={18} />
            <span className='text-primary-content'>Frella</span>
          </div>
          <div className='badge'>+9</div>
        </button>

        <button className='btn'>
          <div className='flex flex-grow items-center gap-2'>
            <PlusIcon size={18} />
            <span className='text-primary-content'>Create new list</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
