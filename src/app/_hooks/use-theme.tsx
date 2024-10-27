import { createContext, ReactNode, useContext } from 'react'

import { CACHE_THEME } from '@/config/tokens'
import { localCache } from '@/libs/local-cache/local-cache'
import { ThemeOptions, ThemeStore } from '@/app/_stores/theme.store.example'

type Props = {
  children: ReactNode
}

let themeStore: ThemeStore

const ThemeContext = createContext<ThemeStore | undefined>(undefined)

export const ThemeProvider = ({ children }: Props) => {
  const theme = localCache.get<ThemeOptions | null>(CACHE_THEME)

  themeStore = new ThemeStore(theme)

  return <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
}

export const useThemeStore = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('ThemeContext must be used within ThemeProvider')
  return context
}
