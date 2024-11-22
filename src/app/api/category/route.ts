import { getAllCategory } from '@/server/data/category.data'
import { privateRoute } from '@/server/functions/private-route.function'

export const GET = privateRoute(async () => {
  try {
    const category = await getAllCategory()

    return Response.json(category, { status: 200 })
  } catch (error) {
    console.log('Error:', error)
    return Response.json('Internal server error.', { status: 500 })
  }
})
