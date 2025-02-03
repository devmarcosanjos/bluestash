import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { LayoutWrapper, Providers } from './_components'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'BLUESTASH',
  description: 'Aplicação de gerenciamento de tarefas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
