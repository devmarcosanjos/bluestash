import { makeAutoObservable } from 'mobx'

import { CACHE_THEME } from '@/config/tokens'
import { localCache } from '@/libs/local-cache/local-cache'

/**
 * !This is only an example of a store.
 * !It's not being used in the application
 * !remove this comment
 */

export type ThemeOptions = 'default' | 'defaultDark'

export class ThemeStore {
  theme: ThemeOptions | null = 'default'
  constructor(theme: ThemeOptions | null) {
    makeAutoObservable(this)

    this.setTheme(theme)
  }

  setTheme(theme: ThemeOptions | null) {
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
