import { redirect } from 'next/navigation'

import { mockUser } from '@/mocks/user.mock'
import { getAuthenticatedUser } from '@/server/data/user.data'
import { getCurrentUser } from '@/server/functions/user.function'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'

jest.mock('@/server/data/user.data')
jest.mock('@/libs/supabase/supabase-server')
jest.mock('next/navigation')

describe('getCurrentUser', () => {
  it('should call getAuthenticatedUser and return a user', async () => {
    // Arrange
    const userMock = mockUser()
    ;(getAuthenticatedUser as jest.Mock).mockResolvedValue(userMock)

    // Act
    const user = await getCurrentUser()

    // Asset
    expect(getAuthenticatedUser).toHaveBeenCalledTimes(1)
    expect(user).toEqual(userMock)
  })

  it('should redirect to /auth when getAuthenticatedUser throws an error', async () => {
    // Arrange
    const mockSupabaseClient = { auth: { signOut: jest.fn() } }
    ;(getAuthenticatedUser as jest.Mock).mockRejectedValue('error')
    ;(supabaseCreateClient as jest.Mock).mockResolvedValue(mockSupabaseClient)

    // Act
    await getCurrentUser()

    // Asset
    expect(getAuthenticatedUser).toHaveBeenCalledTimes(1)
    expect(mockSupabaseClient.auth.signOut).toHaveBeenCalledTimes(1)
    expect(redirect).toHaveBeenCalledWith('/auth')
  })
})
