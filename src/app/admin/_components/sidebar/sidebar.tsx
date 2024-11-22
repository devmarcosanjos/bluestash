'use client'

import { useContext } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Settings } from 'luxon'
import { ListCheck } from 'lucide-react'

import { CategoryContext } from '@/app/admin/context/category.contenxt'

Settings.defaultLocale = 'pt-BR'

const Sidebar = () => {
  // const [category, setCategory] = useState<CategoryModel[]>([])
  const { category } = useContext(CategoryContext)

  if (!category || category === 0) {
    return <p>Loading categories...</p>
  }

  const handleCategorySelect = (id: number) => {
    console.log('Category selected:', id)
  }

  return (
    <div className='m-2 w-64 rounded-lg bg-base-200'>
      <div className='navbar-start flex w-full items-center justify-center px-6 pb-10 pt-6'>
        <Link href='/admin' className='text-xl'>
          <Image alt='Logo' width={120} height={80} src='/logo/logo.svg' />
        </Link>
      </div>

      <div className='flex w-full flex-col gap-2 px-6'>
        {category.map(item => (
          <button
            key={item.id}
            onClick={() => handleCategorySelect(item.id)}
            className='btn flex-1 border-none bg-secondary shadow-none'>
            <div className='flex flex-grow items-center gap-2'>
              <ListCheck size={18} />
              <span className='font-light'>{item.name}</span>
            </div>
          </button>
        ))}

        <Link href='#' className='flex w-full'>
          <button className='btn btn-primary flex-1'>
            <div className='flex items-center gap-2'>
              <span className='font-light'>Relatórios</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
