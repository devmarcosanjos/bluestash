import { NextResponse } from 'next/server'

import { privateRoute } from '@/server/functions/private-route.function'
import { getAuthenticatedSupabaseUser } from '@/server/functions/auth.function'

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}))
jest.mock('@/server/functions/auth.function')

describe('privateRoute()', () => {
  const mockCallback = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should response with 401 if the user is not authenticated', async () => {
    //  Arrange
    ;(getAuthenticatedSupabaseUser as jest.Mock).mockRejectedValue(new Error('  '))
    const sut = privateRoute(mockCallback)

    // Act
    await sut()

    // Asset
    expect(getAuthenticatedSupabaseUser).toHaveBeenCalledTimes(1)
    expect(mockCallback).not.toHaveBeenCalled()
    expect(NextResponse.json).toHaveBeenCalledWith('Not authorized', { status: 401 })
  })

  it('should call the callback if the user is authenticated', async () => {
    //  Arrange
    ;(getAuthenticatedSupabaseUser as jest.Mock).mockResolvedValue(true)
    const sut = privateRoute(mockCallback)

    // Act
    await sut()

    // Asset
    expect(getAuthenticatedSupabaseUser).toHaveBeenCalledTimes(1)
    expect(mockCallback).toHaveBeenCalled()
  })
})
