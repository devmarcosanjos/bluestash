import {ReactNode} from 'react'

import {Metadata} from 'next'

import {getTranslations} from 'next-intl/server'

import {APP_URL} from '@/config/env-client'

type LayoutProps = {
  children: ReactNode
}

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('privacy-policy-page')

  return {
    metadataBase: new URL(APP_URL || ''),
    title: t('title'),
    description: t('description'),
    keywords: [],
    alternates: {
      canonical: `${APP_URL}/privacy-policy`,
    },
    openGraph: {
      images: [
        {
          url: `${APP_URL}/logo/thumbnail.png`,
          width: 800,
          height: 600,
        },
        {
          url: `${APP_URL}/logo/thumbnail.png`,
          width: 1920,
          height: 1080,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    icons: {
      icon: `${APP_URL}/logo/logo-icon-black.png`,
      shortcut: `${APP_URL}/logo/logo-icon-black.png`,
      apple: `${APP_URL}/logo/logo-icon-black.png`,
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: `${APP_URL}/logo/logo-icon-black.png`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': false,
        'noimageindex': false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const Layout = ({children}: LayoutProps) => {
  return <>{children}</>
}

export default Layout
