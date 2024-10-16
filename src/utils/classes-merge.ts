import clsx from 'clsx'
import {ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export const merge = (...params: ClassValue[]) => {
  return twMerge(clsx(...params))
}
