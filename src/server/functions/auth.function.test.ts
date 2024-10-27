import { faker } from '@faker-js/faker'

import { APP_URL } from '@/config/env-client'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'
import {
  getAuthenticatedSupabaseUser,
  signinInWithMagicLink,
} from '@/server/functions/auth.function'

jest.mock('@/libs/supabase/supabase-server')

describe('signinInWithMagicLink', () => {
  const mockSupabaseClient = {
    auth: { signInWithOtp: jest.fn() },
  }

  beforeEach(() => {
    const supabaseCreateClientMock = supabaseCreateClient as jest.Mock
    supabaseCreateClientMock.mockResolvedValue(mockSupabaseClient)
  })

  afterEach(() => jest.clearAllMocks())

  it('should throw an error if signInWithOtp returns an error', async () => {
    mockSupabaseClient.auth.signInWithOtp.mockResolvedValue({ error: true })
    const email = faker.internet.email()
    const sut = signinInWithMagicLink(email)

    await expect(sut).rejects.toEqual('Could not send magic-link email')
  })

  it('should call signInWithOtp with the correct parameters', async () => {
    // Arrange
    mockSupabaseClient.auth.signInWithOtp.mockResolvedValue({ error: null })
    const email = faker.internet.email()

    // Act
    await signinInWithMagicLink(email)

    // Assert
    expect(mockSupabaseClient.auth.signInWithOtp).toHaveBeenCalledWith({
      email,
      options: { emailRedirectTo: `${APP_URL}/auth/callback` },
    })
  })
})

describe('getAuthenticatedSupabaseUser', () => {
  const mockSupabaseClient = { auth: { getUser: jest.fn() } }

  beforeEach(() => {
    const supabaseCreateClientMock = supabaseCreateClient as jest.Mock
    supabaseCreateClientMock.mockImplementation(() => mockSupabaseClient)
  })

  afterEach(() => jest.clearAllMocks())

  it('should call getUser and return the authenticated user', async () => {
    // Arrange
    const user = faker.person.fullName()
    mockSupabaseClient.auth.getUser.mockResolvedValue({ error: null, data: { user: user } })

    // Act
    const sut = getAuthenticatedSupabaseUser()

    // Assert
    await expect(sut).resolves.toEqual(user)
  })

  it('should throw and error if getUser returns an error ', async () => {
    // Arrange
    mockSupabaseClient.auth.getUser.mockResolvedValue({ error: true, data: { user: null } })

    // Act
    const sut = getAuthenticatedSupabaseUser()

    // Assert
    await expect(sut).rejects.toEqual('Could not get current user')
  })
})
