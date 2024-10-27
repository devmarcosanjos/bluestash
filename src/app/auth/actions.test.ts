import { faker } from '@faker-js/faker'

import { signinInWithMagicLink } from '@/server/functions/auth.function'

import { handleLoginForm } from './actions'

jest.mock('@/server/functions/auth.function')

describe('handleLoginForm()', () => {
  it('should execute and return an object with status equals true', async () => {
    // ARRANGE
    const state = faker.word.noun()
    const formData = new FormData()
    formData.set('email', faker.internet.email())

    // ACT
    const sut = await handleLoginForm(state, formData)

    // ASSERT
    expect(signinInWithMagicLink).toHaveBeenCalledWith(formData.get('email'))
    expect(sut).toStrictEqual({ status: true })
  })

  it('should execute and return an object with status equals false', async () => {
    // Arrange
    const state = faker.word.noun()
    const formData = new FormData()
    formData.set('email', faker.internet.email())

    jest.mocked(signinInWithMagicLink).mockRejectedValue('some error')

    // Act
    const sut = await handleLoginForm(state, formData)

    // Assert
    expect(sut).toStrictEqual({ status: false, message: 'some error' })
  })
})
