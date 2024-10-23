import {prisma} from '@/libs/prisma/config'

export async function GET() {
  const users = await prisma.users.findMany({})
  console.log(users)
  return Response.json(users, {
    status: 200,
  })
}
