'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Settings } from 'luxon'
import { AudioWaveform, ChartColumnStacked, ListCheckIcon } from 'lucide-react'

Settings.defaultLocale = 'pt-BR'

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => (pathname === path ? 'bg-primary text-white' : '')

  const handlePathDashboard = () => {
    return router.push(`/admin/dashboard`)
  }

  const handlePathHome = () => {
    return router.push(`/admin`)
  }

  return (
    <aside data-theme='blueStash' className=' w-64 p-4 text-primary-content '>
      <div className='mb-5 mt-20 flex justify-start gap-4'>
        <AudioWaveform className='h-8 w-8 font-bold text-primary' />
        <h1 className='text-2xl font-extralight text-primary-content'>Bluestash</h1>
      </div>

      <div className='flex flex-col space-y-4'>
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
    </aside>
  )
}

export default Sidebar
