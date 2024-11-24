'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { Settings } from 'luxon'
import { ListCheck } from 'lucide-react'

import { CategoryModel } from '@/types/models'
import { categoryApi } from '@/apis/category.api'

Settings.defaultLocale = 'pt-BR'

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const [category, setCategory] = useState<CategoryModel[]>([])

  const handleCategorySelect = (id: number) => {
    const searchParams = new URLSearchParams()
    searchParams.append('category', id.toString())

    router.push(`${pathname}?${searchParams.toString()}`)
  }

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
