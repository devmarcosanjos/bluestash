import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import { prisma } from '@/libs/prisma/config'

jest.mock('@/libs/prisma/config', () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>(),
}))

beforeEach(() => mockReset(prismaMock))

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>
