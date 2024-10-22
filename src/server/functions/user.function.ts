import {getCurrentUser} from '@/server/data/user.data'

export const loadUserData = async () => {
  return await getCurrentUser()
}
