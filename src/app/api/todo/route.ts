import { getAllTodosByUserId } from '@/server/data/todo.data'
import { getAuthenticatedUser } from '@/server/data/user.data'
import { privateRoute } from '@/server/functions/private-route.function'

export const GET = privateRoute(async () => {
  try {
    const user = await getAuthenticatedUser()
    const todos = await getAllTodosByUserId(user.id)

    return Response.json(todos, { status: 200 })
  } catch (error) {
    return Response.json('Internal server error.', { status: 500 })
  }
})
