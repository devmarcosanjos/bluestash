import {makeAutoObservable} from 'mobx'

type ThemeOptions = 'default' | 'defaultDark'

class ThemeStore {
  theme: ThemeOptions = 'default'
  constructor() {
    makeAutoObservable(this)
    const theme = localStorage.getItem('theme')
    console.log(theme)
    this.setTheme(theme as ThemeOptions)
  }

  setTheme(theme: ThemeOptions) {
    this.theme = theme
  }

  private updateCache(theme: ThemeOptions) {
    localStorage.setItem('theme', theme)
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
