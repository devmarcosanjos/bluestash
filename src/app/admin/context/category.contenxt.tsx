'use client'

import { createContext, useEffect, useState } from 'react'

import { CategoryModel } from '@/types/models'
import { categoryApi } from '@/apis/category.api'

export const CategoryContext = createContext()

const CategoryContextProvider = ({ children }) => {
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
