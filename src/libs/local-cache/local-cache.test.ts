import { faker } from '@faker-js/faker'

import { LocalCache } from '@/libs/local-cache/local-cache'
import { localStorageMock } from '@/libs/local-cache/mocks/local-storage.mock'

Object.defineProperty(window, 'localStorage', { value: localStorageMock })
const windowCopy = global.window

const makeSut = () => {
  const sut = new LocalCache()

  return {
    sut,
  }
}

describe('LocalCache', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    jest.clearAllMocks()
    Object.defineProperty(global, 'window', { value: windowCopy })
  })

  describe('SET', () => {
    it('should set data in cache properly', () => {
      const fakeKey = faker.word.words(1)
      const fakeData = {
        property1: faker.commerce.productName(),
        property2: faker.commerce.productDescription(),
      }

      const { sut } = makeSut()

      sut.set(fakeKey, fakeData)

      expect(localStorage.setItem).toHaveBeenCalledWith(fakeKey, JSON.stringify(fakeData))
    })
  })

  describe('GET', () => {
    it('should return undefined', () => {
      const fakeKey = faker.word.words(1)
      const { sut } = makeSut()

      const res = sut.get(fakeKey)

      expect(res).toBe(null)
    })

    it('should return some data', () => {
      const fakeKey = faker.word.words(1)
      const fakeData = {
        property1: faker.commerce.productName(),
        property2: faker.commerce.productDescription(),
      }
      const { sut } = makeSut()
      sut.set(fakeKey, fakeData)

      const res = sut.get(fakeKey)

      expect(res).toStrictEqual(fakeData)
    })

    it('should return null when window is not defined', () => {
      const fakeKey = faker.word.words(1)
      Object.defineProperty(global, 'window', { value: undefined })

      const { sut } = makeSut()

      const res = sut.get(fakeKey)

      expect(res).toBe(null)
    })
  })

  describe('REMOVE', () => {
    it('should remove item from cache', () => {
      const fakeKey = faker.word.words(1)
      const fakeData = {
        property1: faker.commerce.productName(),
        property2: faker.commerce.productDescription(),
      }
      const { sut } = makeSut()

      sut.set(fakeKey, fakeData)
      expect(sut.get(fakeKey)).toStrictEqual(fakeData)

      sut.remove(fakeKey)

      expect(sut.get(fakeKey)).toBe(null)
    })
  })
})
