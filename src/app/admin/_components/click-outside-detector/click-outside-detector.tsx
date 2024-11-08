'use client'
import { useRef, useEffect, ReactNode } from 'react'

interface Props {
  onClickOutside: () => void
  children: ReactNode
}

export const ClickOutsideDetector = ({ onClickOutside, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickOutside])

  return <div ref={ref}>{children}</div>
}
