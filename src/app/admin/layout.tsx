import {Metadata} from 'next'
import {ReactNode} from 'react'
export const metadata: Metadata = {
  title: 'Admin',
  description: '',
}

type Props = {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return children
}
