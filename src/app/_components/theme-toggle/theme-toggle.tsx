'use client'

import { useTheme } from 'next-themes'

import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const isDark = theme === 'defaultDark'

  return (
    <label className='swap swap-rotate ml-2 mr-2'>
      <input
        value='dark'
        type='checkbox'
        checked={isDark}
        className='theme-controller'
        onChange={() => setTheme(isDark ? 'default' : 'defaultDark')}
      />
      <Sun size={25} className='swap-off  fill-current' />
      <Moon size={25} className='swap-on  fill-current' />
    </label>
  )
}
