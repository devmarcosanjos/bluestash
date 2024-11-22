'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Settings } from 'luxon'
import { ListCheck, PlusIcon } from 'lucide-react'

import { categoryApi } from '@/apis/category.api'
import { CategoryModel } from '@/types/models/category.model'

Settings.defaultLocale = 'pt-BR'

const Sidebar = () => {
  const [category, setCategory] = useState<CategoryModel[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await categoryApi.getAllCategory()
        setCategory(data)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    }
    getData()
  }, [])
  return (
    <div className='m-2 w-64 rounded-lg bg-base-200'>
      <div className='navbar-start flex w-full items-center justify-center px-6 pb-10 pt-6'>
        <Link href='/admin' className='text-xl'>
          <Image alt='Logo' width={120} height={80} src='/logo/logo.svg' />
        </Link>
      </div>

      <div className='flex w-full flex-col gap-2 px-6'>
        {category.map((item, index) => (
          <Link href='/admin' key={item.id || index} className='flex w-full'>
            <button className='btn flex-1 border-none bg-secondary shadow-none'>
              <div className='flex flex-grow items-center gap-2'>
                <ListCheck size={18} />
                <span className='font-light'>{item.name}</span>
              </div>
              <div className='badge badge-secondary'>+99</div>
            </button>
          </Link>
        ))}

        {/* <Link href='/admin' className='flex w-full'>
          <button className='btn flex-1 border-none bg-secondary shadow-none'>
            <div className='flex flex-grow items-center gap-2'>
              <ListCheck size={18} />
              <span className='font-light'>TodoList</span>
            </div>
            <div className='badge badge-secondary'>+99</div>
          </button>
        </Link> */}

        <Link href='#' className='flex w-full'>
          <button className='btn btn-primary flex-1'>
            <div className='flex items-center gap-2'>
              <PlusIcon size={18} />
              <span className='font-light'>Create new list</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
