import { prisma } from '@/libs/prisma/config'

export const getAllCategory = async () => {
  const category = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return category
}
