import { makeAutoObservable } from 'mobx'

import { CACHE_THEME } from '@/config/tokens'
import { localCache } from '@/libs/local-cache/local-cache'

type ThemeOptions = 'default' | 'defaultDark'

class ThemeStore {
  theme: ThemeOptions | null = null
  constructor() {
    makeAutoObservable(this)

    const theme = localCache.get<ThemeOptions | null>(CACHE_THEME)
    if (theme) this.setTheme(theme)
  }

  setTheme(theme: ThemeOptions) {
    console.log({ theme })
    this.theme = theme
  }

  private updateCache(theme: ThemeOptions) {
    localCache.set(CACHE_THEME, theme)
  }
  toggle() {
    if (this.theme === 'default') {
      this.setTheme('defaultDark')
      this.updateCache('defaultDark')
    } else {
      this.setTheme('default')
      this.updateCache('default')
    }
  }
}
export const themeStore = new ThemeStore()
