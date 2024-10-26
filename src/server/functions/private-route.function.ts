import { NextResponse } from 'next/server'

import { getAuthenticatedSupabaseUser } from '@/server/functions/auth.function'

type CallbackProps = (...params: any) => Promise<Response>

export const privateRoute = (callback: CallbackProps) => {
  return async (...params: any) => {
    try {
      await getAuthenticatedSupabaseUser()
      return callback(...params)
    } catch (error) {
      return NextResponse.json('Not authorized', { status: 401 })
    }
  }
}
