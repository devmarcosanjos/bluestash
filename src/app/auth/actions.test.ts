import { faker } from '@faker-js/faker'

import { signinInWithMagicLink } from '@/server/functions/auth.function'

import { handleLoginForm } from './actions'

jest.mock('@/server/functions/auth.function')

const makeSUT = async () => {
  const initialState = faker.word.noun()
  const initialFormData = new FormData()
  initialFormData.set('email', faker.internet.email())

  const sut = await handleLoginForm(initialState, initialFormData)

  return {
    sut,
    initialState,
    initialFormData,
  }
}

describe('handleLoginForm()', () => {
  it('should execute and return an object with status equals true', async () => {
    const { sut, initialFormData } = await makeSUT()

    expect(signinInWithMagicLink).toHaveBeenCalledWith(initialFormData.get('email'))
    expect(sut).toStrictEqual({ status: true })
  })

  it('should execute and return an object with status equals false', async () => {
    jest.mocked(signinInWithMagicLink).mockRejectedValue('some error')

    const { sut } = await makeSUT()

    expect(sut).toStrictEqual({ status: false, message: 'some error' })
  })
})
