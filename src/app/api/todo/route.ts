import {NextRequest} from 'next/server'

import {supabaseCreateClient} from '@/libs/supabase/supabase-server'

export const dynamic = 'force-dynamic'

export async function GET(_request: NextRequest) {
  try {
    const supabase = await supabaseCreateClient()

    const {data, error} = await supabase.auth.getSession()

    console.log({data})
    console.log({error})

    // TODO: ROUTER HANDER

    // const user = await getCurrentUser()
    // const todos = await prisma.todo.findMany({
    //   select: {
    //     id: true,
    //     name: true,
    //     description: true,
    //   },
    //   where: {
    //     userId: {
    //       equals: user.id,
    //     },
    //   },
    // })

    // console.log({todos})
    return Response.json([], {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return Response.json([], {
      status: 200,
    })
  }
}
