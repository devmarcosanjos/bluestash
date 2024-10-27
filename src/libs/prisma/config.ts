import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type GlobalThisProps = {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

declare const globalThis: GlobalThisProps

const prismaClient = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prismaClient

export const prisma = prismaClient
