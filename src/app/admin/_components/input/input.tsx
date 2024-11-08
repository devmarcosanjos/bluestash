import { ForwardRefExoticComponent, InputHTMLAttributes, RefAttributes } from 'react'

import { LucideProps } from 'lucide-react'

import { merge } from '@/utils'

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: any
  error?: string | null
  label?: string
  IconEnd?: LucideIcon
}

export const Input = ({ className, error, label, IconEnd, ref, ...props }: InputProps) => {
  return (
    <label className='form-control'>
      {label && (
        <div className='label pt-0'>
          <span className='label-text'>{label}</span>
        </div>
      )}

      <div
        className={merge([
          'input input-bordered flex items-center gap-2',
          className,
          error && 'input-error',
        ])}>
        <input ref={ref} {...props} className={merge(['grow'])} />

        {IconEnd && <IconEnd size={18} className='text-neutral' />}
      </div>

      {error && (
        <div className='label pb-0'>
          <span className='label-text-alt text-error'>{error}</span>
        </div>
      )}
    </label>
  )
}
