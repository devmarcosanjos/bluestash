'use client'

import { useState } from 'react'

import { PlusIcon } from 'lucide-react'

import { merge } from '@/utils'
import { DatePicker } from '@/app/admin/_components/date-picker'
import { ClickOutsideDetector } from '@/app/admin/_components/click-outside-detector'

interface ButtonNewTaskProps {
  showNewTask: Date
  setShowNewTask: (date: Date) => void
}

export const ButtonNewTask = ({ showNewTask, setShowNewTask }: ButtonNewTaskProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={merge(['dropdown dropdown-end dropdown-top', open && 'dropdown-open'])}>
      <div role='button' className='flex items-center hover:cursor-pointer'>
        <button
          onClick={() => setOpen(true)}
          className='btn btn-primary flex w-[500px] items-center gap-2 rounded-lg px-4 py-2'>
          <PlusIcon size={18} />
          <span>New Task</span>
        </button>
      </div>

      <ClickOutsideDetector onClickOutside={() => setOpen(false)}>
        <form>
          <ul className='menu dropdown-content z-[1] w-[500px] rounded-lg border border-gray-200 bg-white p-4 shadow-lg'>
            <li className='mb-3'>
              <label className='input flex items-center gap-2 rounded-lg border bg-gray-50 px-3 py-2'>
                <PlusIcon size={18} className='text-gray-400' />
                <input
                  type='text'
                  placeholder='Create new task'
                  className='flex-1 bg-transparent text-gray-700 outline-none'
                />
              </label>
            </li>

            <div className='mb-3 flex gap-3'>
              <li className=''>
                <select className='select select-bordered flex w-full items-center rounded-lg bg-gray-50 text-gray-700'>
                  <option disabled selected>
                    Lista
                  </option>
                  <option>Todo List</option>
                  <option>Work</option>
                  <option>Frella</option>
                </select>
              </li>
              <li className=''>
                <select className='select select-bordered w-full rounded-lg bg-gray-50 text-gray-700'>
                  <option disabled selected>
                    Prioridade
                  </option>
                  <option>Baixa</option>
                  <option>Média</option>
                  <option>Alta</option>
                </select>
              </li>
              <DatePicker value={showNewTask} onChange={setShowNewTask} />
            </div>

            <li className='mb-3'>
              <textarea
                rows={5}
                placeholder='Add notes'
                className='textarea w-full resize-none rounded-lg bg-gray-50 text-gray-700'></textarea>
            </li>

            <div className='mt-4 flex justify-end gap-2'>
              <button className='btn btn-success rounded-lg bg-success px-4 py-2'>Save</button>
              <button className='btn btn-error rounded-lg bg-error px-4 py-2 '>Reset</button>
            </div>
          </ul>
        </form>
      </ClickOutsideDetector>
    </div>
  )
}
