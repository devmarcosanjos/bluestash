'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from '@/app/_hooks/use-theme'

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
