'use client'

import { toast } from 'react-toastify'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import { ClockIcon, PenIcon, Trash2Icon } from 'lucide-react'

import { todoApi } from '@/apis/todo.api'
import { TodoModel } from '@/types/models'
import { useTodoForm } from '@/app/admin/_context/todo.context'
import { deleteTodoAction, updateTodoAction } from '@/app/admin/actions'

interface TodoListProps {
  selectedDate: Date
}

export const TodoList = ({ selectedDate }: TodoListProps) => {
  const [todos, setTodos] = useState<TodoModel[]>([])
  const params = useSearchParams()
  const { refetchCount, setInitialData, setDropdownOpen, refetch } = useTodoForm()

  const handleCheckboxClick = async (taskId: number) => {
    const newTasks = todos.map(async todo => {
      if (todo.id !== taskId) return todo

      if (todo.completed === false || todo.completed === undefined) {
        const updateTodo = { ...todo, completed: true }
        await updateTodoAction({
          ...updateTodo,
          start_date: new Date(updateTodo.start_date),
        })
        toast('Todo completado!', { type: 'success' })
        return updateTodo
      }

      const updateTodo = { ...todo, completed: false }
      await updateTodoAction({
        ...updateTodo,
        start_date: new Date(updateTodo.start_date),
      })
      toast('Todo a fazer!', { type: 'warning' })
      return updateTodo
    })

    const newTaskResolver = await Promise.all(newTasks)
    setTodos(newTaskResolver)
  }

  const getStatusClass = (isConpleted: boolean) => {
    if (isConpleted === true) {
      return 'line-through text-base-content'
    }
  }

  const isToday = useCallback(
    (date: string) => {
      const taskDate = new Date(date)
      return (
        selectedDate.getDate() === taskDate.getDate() &&
        selectedDate.getMonth() === taskDate.getMonth() &&
        selectedDate.getFullYear() === taskDate.getFullYear()
      )
    },
    [selectedDate],
  )

  const filteredTodos = useMemo(() => {
    const categoryId = params.get('category')
    return todos.filter(todo => {
      const matchDate = todo.start_date && isToday(todo.start_date)
      const matchCategory = todo.categoria_id === Number(categoryId)

      if (categoryId) return matchDate && matchCategory
      return matchDate
    })
  }, [isToday, params, todos])

  const handleTodoEdit = (todo: TodoModel) => {
    setDropdownOpen(true)
    setInitialData(todo)
  }

  const handleTodoDelete = async (todo: TodoModel) => {
    const todoWithDate = {
      ...todo,
      start_date: new Date(todo.start_date),
      end_date: new Date(todo.end_date),
    }

    await deleteTodoAction(todoWithDate)
    toast('Todo deletado!', { type: 'success' })
    refetch()
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const todos = await todoApi.getAllTodos()
        setTodos(todos)
      } catch (error) {
        return console.error('Erro ao buscar tarefas:', error)
      }
    }
    getData()
  }, [refetchCount])

  return (
    <div className='indicator mt-7 flex w-full flex-col gap-2'>
      {filteredTodos.length > 0 ? (
        filteredTodos.map(todo => (
          <div tabIndex={0} key={todo.id} className='collapse !overflow-visible '>
            <div className='collapse-title p-0 '>
              <div key={todo.id} className='flex items-center gap-2 rounded-lg bg-base-200  p-3 '>
                <input
                  type='checkbox'
                  defaultChecked={todo.completed}
                  onChange={() => handleCheckboxClick(todo.id)}
                  className='checkbox-primary checkbox checkbox-sm'
                />
                <span className={`flex-grow break-all  ${getStatusClass(todo.completed)}`}>
                  {todo.name}
                </span>

                {todo.start_date && todo.end_date && (
                  <div className='flex items-center gap-2'>
                    <ClockIcon size={18} />
                    <span>{todo.start_date}</span>
                    <span>-</span>
                    <span>{todo.end_date}</span>
                  </div>
                )}
                <div className='flex items-center space-x-2'>
                  <div>
                    {Number(todo.categoria_id) === 1 && (
                      <span className='rounded-md bg-blue-700 p-1 text-xs text-white'>
                        <span className='font-light'>Todo List</span>
                      </span>
                    )}
                  </div>

                  <div>
                    {Number(todo.categoria_id) === 2 && (
                      <span className='rounded-md bg-fuchsia-700 p-1 text-xs text-white'>
                        <span className='font-light'>Work</span>
                      </span>
                    )}
                  </div>

                  <div>
                    {Number(todo.priority) === 1 && (
                      <span className='rounded-md bg-red-700 p-1 text-xs text-white'>
                        <span className='font-light'>Prioridade: Alta</span>
                      </span>
                    )}
                  </div>
                  <div>
                    {Number(todo.priority) === 2 && (
                      <span className='rounded-md bg-yellow-700 p-1 text-xs text-white'>
                        <span className='font-light'>Prioridade: Média</span>
                      </span>
                    )}
                  </div>
                  <div>
                    {Number(todo.priority) === 3 && (
                      <span className='rounded-md bg-green-700 p-1 text-xs text-white'>
                        <span className='font-light'>Prioridade: Baixa</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleTodoEdit(todo)}
                    className='btn btn-square btn-sm text-base-content '>
                    <PenIcon size={18} />
                  </button>
                  <button
                    onClick={() => handleTodoDelete(todo)}
                    className='btn btn-square btn-sm text-error'>
                    <Trash2Icon size={18} />
                  </button>
                </div>

                {/* <div className=' btn btn-square btn-sm flex bg-blue-500 '>
                  <details className='dropdown dropdown-end'>
                    <summary className='btn btn-square btn-sm relative z-[20]  bg-red-500 hover:cursor-pointer'>
                      <EllipsisVerticalIcon size={18} className='text-base-content' />
                    </summary>
                    <ul className='= menu dropdown-content relative z-[100] w-52 rounded-box  bg-red-100 p-2 shadow'>
                      <li>
                        <button className='text-base-content' onClick={() => handleTodoEdit(todo)}>
                          <PenIcon size={18} />
                          Editar
                        </button>
                      </li>
                      <li>
                        <button className='text-error' onClick={() => handleTodoDelete(todo)}>
                          <Trash2Icon size={18} />
                          Deletar
                        </button>
                      </li>
                    </ul>
                  </details>
                </div> */}
              </div>
            </div>
            <div className='collapse-content -mt-2 rounded-bl-lg rounded-br-lg bg-base-200 pt-4'>
              {todo.description}
            </div>
          </div>
        ))
      ) : (
        <p className='text-center'>No tasks for today</p>
      )}
    </div>
  )
}
