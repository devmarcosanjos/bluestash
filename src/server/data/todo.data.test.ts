import { faker } from '@faker-js/faker/.'

import { prismaMock } from '@/libs/prisma/mocks/config.mock'
import { getAllTodosByUserId } from '@/server/data/todo.data'

describe('getAllTodosByUserId', () => {
  it('should return a list of todos', async () => {
    // Arrange
    const userId = faker.number.int()
    prismaMock.todo.findMany.mockResolvedValue([])

    // Act
    const todos = await getAllTodosByUserId(userId)

    // Assert
    expect(todos).toStrictEqual([])
  })
})
