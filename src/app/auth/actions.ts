'use server'

import {signinInWithMagicLink} from '@/server/functions/auth/auth.function'

export const handleLoginForm = async (state: any, formData: FormData) => {
  try {
    await signinInWithMagicLink(formData.get('email') as string)

    return {status: true}
  } catch (_error) {
    return {status: false}
  }
}
