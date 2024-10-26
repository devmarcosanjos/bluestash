import { faker } from '@faker-js/faker'

import { APP_URL } from '@/config/env-client'
import { supabaseCreateClient } from '@/libs/supabase/supabase-server'
import { signinInWithMagicLink } from '@/server/functions/auth.function'

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

    // Asset
    expect(mockSupabaseClient.auth.signInWithOtp).toHaveBeenCalledWith({
      email,
      options: { emailRedirectTo: `${APP_URL}/auth/callback` },
    })
  })
})
