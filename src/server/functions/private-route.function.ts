import { NextResponse } from 'next/server'

import { getAuthenticatedSupabaseUser } from '@/server/functions/auth.function'

type CallbackProps = (...params: any) => Promise<Response>

export const privateRoute = (callback: CallbackProps) => {
  return async (...params: any) => {
    const user = await getAuthenticatedSupabaseUser()

    if (user) {
      return callback(...params)
    }

    return NextResponse.json('No authorized', { status: 401 })
  }
}
