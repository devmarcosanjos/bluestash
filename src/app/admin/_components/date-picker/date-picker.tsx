'use client'

import 'react-day-picker/style.css'

import { useRef } from 'react'
import { DayPicker } from 'react-day-picker'

import { DateTime } from 'luxon'
import { ptBR } from 'react-day-picker/locale'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

import { merge } from '@/utils'

import { Input } from '../input'
import { ClickOutsideDetector } from '../click-outside-detector'

type Props = {
  label: string
  value: Date
  onChange: (date: Date) => void
}

export const DatePicker = ({ label, value, onChange }: Props) => {
  const ref = useRef<HTMLDetailsElement>(null)

  const handleSelectDate = (date: Date) => {
    onChange(date)
    ref.current?.removeAttribute('open')
  }

  const handleClickOutside = () => {
    ref.current?.removeAttribute('open')
  }

  return (
    <ClickOutsideDetector onClickOutside={handleClickOutside}>
      <details ref={ref} className={merge(['dropdown-start dropdown w-full'])}>
        <summary
          role='button'
          onClick={() => ref.current?.toggleAttribute('open')}
          className={`
            w-full
            marker:[content:""]
          `}>
          <Input
            readOnly
            label={label}
            IconEnd={Calendar}
            value={DateTime.fromJSDate(value).toLocaleString()}
          />
        </summary>

        <div
          onBlur={() => ref.current?.removeAttribute('open')}
          className={merge(['dropdown-content z-[1] mt-1 rounded-box bg-base-100 p-2 shadow'])}>
          <DayPicker
            required
            mode='single'
            locale={ptBR}
            showOutsideDays
            selected={value}
            className='flex'
            onSelect={handleSelectDate}
            classNames={{
              selected: '!bg-primary rounded-lg !text-primary-content',
              today: 'bg-neutral/40 text-neutral-content rounded-lg',
              nav: 'w-full absolute flex gap-3 justify-between items-center h-[2.75rem]',
              caption_label: 'w-full items-center flex justify-center capitalize',
            }}
            components={{
              PreviousMonthButton: (props: any) => (
                <div {...props} className='btn btn-ghost btn-sm rounded-lg'>
                  <ChevronLeft size={24} className='' />
                </div>
              ),
              NextMonthButton: (props: any) => (
                <div {...props} className='btn btn-ghost btn-sm rounded-lg'>
                  <ChevronRight size={24} className='' />
                </div>
              ),
            }}
          />
        </div>
      </details>
    </ClickOutsideDetector>
  )
}
