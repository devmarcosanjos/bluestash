'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'

import { CategoryModel } from '@/types/models'
import { categoryApi } from '@/apis/category.api'

interface CategoryContextProps {
  category: CategoryModel[]
  setCategory: (category: CategoryModel[]) => void
}

interface Props {
  children: ReactNode
}

export const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps)

const CategoryContextProvider = ({ children }: Props) => {
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
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
