import {getCurrentUser} from '@/server/data/user.data'

export const loadUserData = async () => {
  try {
    return await getCurrentUser()
  } catch (error) {
    return null
  }
}
