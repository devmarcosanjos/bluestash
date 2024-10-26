'use server'

import { signinInWithMagicLink } from '@/server/functions/auth.function'

export const handleLoginForm = async (_state: any, formData: FormData) => {
  try {
    await signinInWithMagicLink(formData.get('email') as string)

    return { status: true }
  } catch (error) {
    return { status: false, message: error }
  }
}
