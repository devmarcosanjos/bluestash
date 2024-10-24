import {getCurrentUser} from '@/server/data/user.data'
import {getAllTodosByUserId} from '@/server/data/todo.data'
import {privateRoute} from '@/server/functions/private-route.function'

export const GET = privateRoute(async () => {
  try {
    const user = await getCurrentUser()
    const todos = await getAllTodosByUserId(user.id)

    return Response.json(todos, {status: 200})
  } catch (error) {
    return Response.json('Internal server error.', {status: 500})
  }
})
