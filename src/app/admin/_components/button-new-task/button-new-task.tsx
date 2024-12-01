'use client'

import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import { PlusIcon } from 'lucide-react'

import { merge } from '@/utils'
import { categoryApi } from '@/apis/category.api'
import { CategoryModel } from '@/types/models/category.model'
import { useTodoForm } from '@/app/admin/_context/todo.context'
import { DatePicker } from '@/app/admin/_components/date-picker'
import { createTodoAction, updateTodoAction } from '@/app/admin/actions'
import { ClickOutsideDetector } from '@/app/admin/_components/click-outside-detector'
import { PriorityOptions, TaskSchema } from '@/app/admin/_components/button-new-task/schema'

interface ButtonNewTaskProps {
  showNewTask: Date
  setShowNewTask: (date: Date) => void
}

export const ButtonNewTask = ({ showNewTask, setShowNewTask }: ButtonNewTaskProps) => {
  const [category, setCategory] = useState<CategoryModel[]>([])
  const { refetch, formHandler, setDropdownOpen, dropdownOpen, initialData } =
    useTodoForm(showNewTask)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
  } = formHandler

  async function handleSaveTask(data: TaskSchema) {
    if (initialData && initialData.id) {
      await updateTodoAction({
        id: initialData.id,
        categoria_id: Number(data.list),
        name: data.task,
        description: data.notes || '',
        start_date: data.date,
        priority: data.priority as PriorityOptions,
      })
    } else {
      await createTodoAction(data)
    }
    refetch()
    reset()
    setDropdownOpen(false)
    toast('Todo salvo!', { type: 'success' })
  }

  useEffect(() => {
    const getData = async () => {
      const category = await categoryApi.getAllCategory()
      setCategory(category)
    }
    getData()
  }, [])

  return (
    <div className={merge(['dropdown dropdown-end dropdown-top', dropdownOpen && 'dropdown-open'])}>
      <div role='button' className='flex items-center hover:cursor-pointer'>
        <button
          onClick={() => setDropdownOpen(true)}
          className='btn btn-primary flex w-[500px] items-center gap-2 rounded-lg px-4 py-2'>
          <PlusIcon size={18} />
          <span>New Task</span>
        </button>
      </div>

      <ClickOutsideDetector onClickOutside={() => setDropdownOpen(false)}>
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
                  className={merge([
                    'select select-bordered flex w-full items-center rounded-lg bg-gray-50 text-gray-700',
                    errors.list && 'border-red-500',
                  ])}
                  {...register('list')}>
                  <option disabled value=''>
                    Lista
                  </option>
                  {category.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </li>
              <li className=''>
                <select
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
                  setDropdownOpen(false)
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
