'use client'

import {useEffect, useState} from 'react'

import {User} from '@supabase/supabase-js'

import {HeaderAdmin} from '@/app/admin/_components'
import {supabase} from '@/libs/supabase/supabase-client'

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
    <div className='flex h-screen w-full flex-col items-center'>
      <HeaderAdmin user={user} />
      <div className='flex flex-1 items-center justify-center'>
        <h1 className='text-3xl'>Admin</h1>
      </div>
    </div>
  )
}
