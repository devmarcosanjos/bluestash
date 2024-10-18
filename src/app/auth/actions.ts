'use server'

import {siginInWithMagicLink} from '@/server/functions/auth/auth.function'

export const handleLoginForm = async (state: any, formData: FormData) => {
  try {
    await siginInWithMagicLink(formData.get('email') as string)

    return {status: true}
  } catch (error) {
    return {status: false}
  }
}
