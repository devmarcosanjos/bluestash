import fetch from 'jest-mock-fetch'
import { faker } from '@faker-js/faker'

import { FetchHttpClient } from './fetch-http-client'

const makeSut = (token: string = faker.string.uuid()) => {
  const basePath = 'http://localhost'
  const sut = new FetchHttpClient(basePath, token)

  return {
    sut,
    basePath,
    token,
  }
}

describe('FetchHttpClient', () => {
  beforeEach(() => {
    fetch.reset()
  })

  describe('setToken', () => {
    it('Should set token value ', () => {
      const { sut, basePath } = makeSut('')
      const token = faker.string.uuid()
      sut.setToken(token)

      const getMock = sut.get('/example')

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'GET',
        body: undefined,
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(getMock).resolves.toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('FAIL', () => {
    it('should throw a custom error when the server responded with a failure. e.g: 5xx, 4xx', () => {
      const { sut } = makeSut()
      const requestMock = sut.get('/example')

      fetch.mockResponse({
        json: () => Promise.resolve('Generic server error'),
        status: 500,
        ok: false,
      })

      expect(requestMock).rejects.toStrictEqual('Generic server error')
    })

    it('should throw a custom error when the server responded with a failure and the `error` property must be null', () => {
      const { sut } = makeSut()
      const requestMock = sut.get('/example')

      fetch.mockResponse({
        json: () => Promise.reject('Unauthorized'),
        status: 400,
        ok: false,
      })

      expect(requestMock).rejects.toStrictEqual('Unauthorized')
    })

    it(`should throw an generic error when the request couldn't be made`, () => {
      const { sut } = makeSut()
      const requestMock = sut.get('/example')

      fetch.mockError('Generic internal error')

      expect(requestMock).rejects.toBe('Generic internal error')
    })
  })

  describe('GET', () => {
    it('Should call GET method properly with the correct response', () => {
      const { sut, basePath, token } = makeSut()
      const getMock = sut.get('/example')

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'GET',
        body: undefined,
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(getMock).resolves.toStrictEqual({ body: true, status: 200 })
    })

    it('Should call GET method properly without Authorization header', () => {
      const { sut, basePath } = makeSut('')
      const getMock = sut.get('/example')

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'GET',
        body: undefined,
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': '',
        },
      })

      expect(getMock).resolves.toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('POST', () => {
    it('Should call POST method properly with the correct response', () => {
      const { sut, basePath, token } = makeSut()
      const postMock = sut.post('/example', { data: true })

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'POST',
        body: JSON.stringify({ data: true }),
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(postMock).resolves.toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('PUT', () => {
    it('Should call PUT method properly with the correct response', () => {
      const { sut, basePath, token } = makeSut()
      const putMock = sut.put('/example', { data: true })

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'PUT',
        body: JSON.stringify({ data: true }),
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(putMock).resolves.toStrictEqual({ body: true, status: 200 })
    })
  })

  describe('PATCH', () => {
    it('Should call PATCH method properly with the correct response', () => {
      const { sut, basePath, token } = makeSut()
      const putMock = sut.patch('/example', { data: true })

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'PATCH',
        body: JSON.stringify({ data: true }),
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(putMock).resolves.toStrictEqual({ body: true, status: 200 })
    })

    it('Should return a null body when the response is empty', () => {
      const { sut, basePath, token } = makeSut()
      const putMock = sut.patch('/example', { data: true })

      fetch.mockResponse({ json: () => Promise.reject() })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'PATCH',
        body: JSON.stringify({ data: true }),
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(putMock).resolves.toStrictEqual({ body: null, status: 200 })
    })
  })

  describe('DELETE', () => {
    it('Should call DELETE method properly with the correct response', () => {
      const { sut, basePath, token } = makeSut()
      const deleteMock = sut.delete('/example')

      fetch.mockResponse({ json: () => Promise.resolve(true) })

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'DELETE',
        body: undefined,
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`,
        },
      })

      expect(deleteMock).resolves.toStrictEqual({ body: true, status: 200 })
    })
  })
})
