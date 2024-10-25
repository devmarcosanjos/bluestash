'use client'

import {Moon, Sun} from 'lucide-react'
import {observer} from 'mobx-react-lite'

import {themeStore} from '@/app/_stores/theme.store'

export const ThemeToggle = observer(() => {
  return (
    <label className='swap swap-rotate ml-2 mr-2'>
      <input
        value='dark'
        type='checkbox'
        className='theme-controller'
        onChange={() => themeStore.toggle()}
        checked={themeStore.theme === 'default'}
      />
      <Sun size={25} className='swap-off  fill-current' />
      <Moon size={25} className='swap-on  fill-current' />
    </label>
  )
})
