'use client'

import { redirect, usePathname, useRouter } from 'next/navigation'

import { Settings } from 'luxon'
import { AudioWaveform, ChartColumnStacked, ListCheckIcon, LogOut, UserPen } from 'lucide-react'

import { supabase } from '@/libs/supabase/supabase-client'

Settings.defaultLocale = 'pt-BR'

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/')
  }

  const isActive = (path: string) => (pathname === path ? 'bg-primary text-white' : '')

  const handlePathDashboard = () => {
    return router.push(`/admin/dashboard`)
  }

  const handlePathHome = () => {
    return router.push(`/admin`)
  }

  const handlePathProfile = () => {
    return router.push(`/admin/profile`)
  }

  return (
    <aside
      data-theme='blueStash'
      className=' flex w-64 flex-col border-r border-r-primary/50 p-4 text-primary-content'>
      <div className='mb-16 mt-5 justify-start gap-4'>
        <AudioWaveform className='h-8 w-8 font-bold text-primary' />
        <h1 className='text-4xl font-extralight text-primary-content'>Bluestash</h1>
      </div>

      <div className='flex flex-1 flex-col justify-between'>
        <div className='space-y-4'>
          <div
            className={`flex cursor-pointer items-center gap-4 rounded-xl p-3 ${isActive('/admin')}`}>
            <ListCheckIcon size={16} />
            <button onClick={() => handlePathHome()}>TodoList</button>
          </div>
          <div
            className={`flex cursor-pointer items-center gap-4 rounded-xl p-3 ${isActive('/admin/dashboard')}`}>
            <ChartColumnStacked size={16} />
            <button onClick={() => handlePathDashboard()}>Dashboard</button>
          </div>
        </div>

        <div className='flex flex-col'>
          <div
            className={`flex cursor-pointer items-center gap-4 rounded-xl p-3 ${isActive('/admin/profile')}`}>
            <UserPen size={16} />
            <button onClick={() => handlePathProfile()}>My profile</button>
          </div>
          <div className='m-4 border border-base-300'></div>
          <div
            className={`flex cursor-pointer items-center gap-4 rounded-xl p-3 text-error hover:text-red-500`}>
            <LogOut size={18} />
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
