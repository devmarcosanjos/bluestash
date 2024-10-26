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
  it('should response with 401 when the user is not authenticated', async () => {
    //  Arrange
    ;(getAuthenticatedSupabaseUser as jest.Mock).mockRejectedValue(new Error('  '))
    const mockCallback = jest.fn()
    const sut = privateRoute(mockCallback)

    // Act
    await sut('test')

    // Asset
    expect(getAuthenticatedSupabaseUser).toHaveBeenCalledTimes(1)
    expect(mockCallback).not.toHaveBeenCalled()
    expect(NextResponse.json).toHaveBeenCalledWith('Not authorized', { status: 401 })
  })
})
