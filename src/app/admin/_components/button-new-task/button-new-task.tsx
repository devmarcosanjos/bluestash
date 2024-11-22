'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { PlusIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { merge } from '@/utils'
import { DatePicker } from '@/app/admin/_components/date-picker'
import { ClickOutsideDetector } from '@/app/admin/_components/click-outside-detector'

const taskSchema = z.object({
  task: z.string().min(1, 'Campo obrigatório'),
  list: z.enum(['Todo List', 'Work', 'Frella'], { message: 'Campo obrigatório' }),
  priority: z.enum(['1', '2', '3'], { message: 'Campo obrigatório' }),
  date: z.date(),
  notes: z.string().optional(),
})

type TaskSchema = z.infer<typeof taskSchema>

interface ButtonNewTaskProps {
  showNewTask: Date
  setShowNewTask: (date: Date) => void
}

export const ButtonNewTask = ({ showNewTask, setShowNewTask }: ButtonNewTaskProps) => {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      date: showNewTask,
    },
  })

  async function handleSaveTask(data: TaskSchema) {
    // salvar nova tarefa
    console.log(data)
  }

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
        <form onSubmit={handleSubmit(handleSaveTask)}>
          <ul className='menu dropdown-content z-[1] w-[500px] rounded-lg border border-gray-200 bg-white p-4 shadow-lg'>
            <li className='mb-3'>
              <label
                className={merge([
                  'input flex items-center gap-2 rounded-lg border bg-gray-50 px-3 py-2',
                  errors.task && 'border-red-500',
                ])}>
                <PlusIcon size={18} className='text-gray-400' />
                <input
                  type='text'
                  placeholder='Create new task'
                  className='flex-1 bg-transparent text-gray-700 outline-none'
                  {...register('task')}
                />
              </label>
            </li>

            <div className='mb-3 flex gap-3'>
              <label htmlFor='list' className='sr-only'>
                Selecionar lista
              </label>
              <li className=''>
                <select
                  id='list'
                  defaultValue=''
                  className={merge([
                    'select select-bordered flex w-full items-center rounded-lg bg-gray-50 text-gray-700',
                    errors.list && 'border-red-500',
                  ])}
                  {...register('list')}>
                  <option disabled value=''>
                    Lista
                  </option>
                  <option>Todo List</option>
                  <option>Work</option>
                  <option>Frella</option>
                </select>
              </li>
              <li className=''>
                <select
                  defaultValue=''
                  className={merge([
                    'select select-bordered w-full rounded-lg bg-gray-50 text-gray-700',
                    errors.priority && 'border-red-500',
                  ])}
                  {...register('priority')}>
                  <option disabled value=''>
                    Prioridade
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </li>
              <DatePicker
                value={getValues('date') || showNewTask}
                onChange={date => {
                  setValue('date', date)
                  setShowNewTask(date)
                }}
              />
            </div>

            <li className='mb-3'>
              <textarea
                rows={5}
                placeholder='Add notes'
                className='textarea w-full resize-none rounded-lg bg-gray-50 text-gray-700'
                {...register('notes')}></textarea>
            </li>

            <div className='mt-4 flex justify-end gap-2'>
              <button
                type='submit'
                disabled={!isValid}
                className='btn btn-success rounded-lg bg-success px-4 py-2'>
                Save
              </button>
              <button
                className='btn btn-error rounded-lg bg-error px-4 py-2'
                onClick={() => {
                  reset()
                  setOpen(false)
                }}>
                Reset
              </button>
            </div>
          </ul>
        </form>
      </ClickOutsideDetector>
    </div>
  )
}
