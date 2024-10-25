import {faker} from '@faker-js/faker'

import * as authActions from './actions'

jest.mock('./actions')

describe('handleLoginForm()', () => {
  it('must call the function correctly', () => {
    const fakeState = faker.word.noun()
    const fakeFormData = new FormData()
    fakeFormData.set('email', faker.internet.email())

    const sutSpy = jest.spyOn(authActions, 'handleLoginForm')

    authActions.handleLoginForm(fakeState, fakeFormData)

    expect(sutSpy).toHaveBeenCalledWith(fakeState, fakeFormData)
  })
})
