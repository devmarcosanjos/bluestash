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
    <div
      data-theme='blueStash'
      className={merge(['dropdown dropdown-end dropdown-top', dropdownOpen && 'dropdown-open'])}>
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
          <ul className='menu dropdown-content z-[1] w-[500px] rounded-lg border border-neutral  p-4 shadow-lg'>
            <li className='mb-3'>
              <label
                className={merge([
                  'input flex items-center gap-2 rounded-lg border px-3 py-2',
                  errors.task && 'border-red-500',
                ])}>
                <PlusIcon size={18} className='text-primary' />
                <input
                  type='text'
                  placeholder='Create new task'
                  className='flex-1 text-primary-content outline-none'
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
                    'select select-bordered flex w-full items-center rounded-lg  text-primary-content ',
                    errors.list && 'border-red-500',
                  ])}
                  {...register('list')}>
                  <option disabled value='' className='bg-black'>
                    Lista
                  </option>
                  {category.map(item => (
                    <option key={item.id} value={item.id} className='bg-black'>
                      {item.name}
                    </option>
                  ))}
                </select>
              </li>
              <li className=''>
                <select
                  className={merge([
                    'bg-red select select-bordered w-full rounded-lg text-primary-content text-primary-content',
                    errors.priority && 'border-error',
                  ])}
                  {...register('priority')}>
                  <option disabled value='' className='bg-black '>
                    Prioridade
                  </option>
                  <option className='bg-black '>1</option>
                  <option className='bg-black '>2</option>
                  <option className='bg-black'>3</option>
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
                className='textarea w-full resize-none rounded-lg text-2xl text-primary-content'
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
