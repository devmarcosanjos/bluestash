import {NextRequest} from 'next/server'

import {getCurrentUser} from '@/server/data/user.data'
import {getAllTodosByUserId} from '@/server/data/todo.data'

export const dynamic = 'force-dynamic'

export async function GET(_request: NextRequest) {
  try {
    const user = await getCurrentUser()
    const todos = await getAllTodosByUserId(user.id)

    return Response.json(todos, {
      status: 200,
    })
  } catch (error) {
    return Response.json('Internal server error.', {
      status: 500,
    })
  }
}
