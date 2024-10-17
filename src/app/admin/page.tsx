'use client'

import {useEffect, useState} from 'react'

import {supabase} from '@/libs/supabase/supabase-client'
import {User} from '@supabase/supabase-js'

export default function Page() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const res = async function () {
      const {data} = await supabase.auth.getUser()
      setUser(data?.user)
    }
    res()
  }, [])

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h1 className=''>Admin</h1>
      <p>{user?.email}</p>
    </div>
  )
}
