import {Metadata} from 'next'
import {ReactNode} from 'react'
export const metadata: Metadata = {
  title: 'Auth',
  description: '',
}

type Props = {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return children
}
