import {ReactNode} from 'react'

import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: '',
}

type Props = {
  children: ReactNode
}

export default async function Layout({children}: Props) {
  return children
}
