export const localStorageMock = (function () {
  let store: any = {}
  return {
    getItem: jest.fn((key: string) => {
      return store[key]
    }),
    setItem: jest.fn((key: string, value: any) => {
      store[key] = value.toString()
    }),
    clear: jest.fn(() => {
      store = {}
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key]
    }),
  }
})()
