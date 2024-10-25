'use client'

import {ReactNode} from 'react'

import {observer} from 'mobx-react-lite'

import {themeStore} from '@/app/_stores/theme.store'

type Props = {
  children: ReactNode
}

export const LayoutWapper = observer(({children}: Props) => {
  return (
    <main suppressHydrationWarning data-theme={themeStore.theme} className='min-h-screen w-full'>
      {children}
    </main>
  )
})
