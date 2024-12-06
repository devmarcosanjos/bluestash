'use client'

import { toast } from 'react-toastify'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import { ClockIcon, EllipsisVerticalIcon, PenIcon, ScrollIcon, Trash2Icon } from 'lucide-react'

import { todoApi } from '@/apis/todo.api'
import { TodoModel } from '@/types/models'
import { useTodoForm } from '@/app/admin/_context/todo.context'
import { deleteTodoAction, updateTodoAction } from '@/app/admin/actions'
import TodoSeparator from '@/app/admin/_components/todo-separator/todoSeparator'

interface TodoListProps {
  selectedDate: Date
}

export const TodoList = ({ selectedDate }: TodoListProps) => {
  const [todos, setTodos] = useState<TodoModel[]>([])
  const params = useSearchParams()
  const { refetchCount, setInitialData, setDropdownOpen, refetch } = useTodoForm()

  // Atualiza o estado da tarefa ao clicar no checkbox
  const handleCheckboxClick = async (taskId: number) => {
    const updatedTodos = await Promise.all(
      todos.map(async todo => {
        if (todo.id !== taskId) return todo

        const updatedTodo = { ...todo, completed: !todo.completed }
        await updateTodoAction({
          ...updatedTodo,
          start_date: new Date(updatedTodo.start_date),
        })
        toast(updatedTodo.completed ? 'Todo completado!' : 'Todo a fazer!', {
          type: updatedTodo.completed ? 'success' : 'warning',
        })
        return updatedTodo
      }),
    )
    setTodos(updatedTodos)
  }

  const getStatusClass = (isCompleted: boolean) =>
    isCompleted ? 'line-through text-base-content' : ''

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

  // Filtra tarefas por data, categoria e prioridade
  const filteredTodos = useMemo(() => {
    const categoryId = params.get('category')
    return todos.filter(todo => {
      const matchDate = todo.start_date && isToday(todo.start_date)
      const matchCategory = categoryId ? todo.categoria_id === Number(categoryId) : true
      return matchDate && matchCategory
    })
  }, [isToday, params, todos])

  // Agrupa tarefas por prioridade
  const groupedTodos = useMemo(() => {
    return filteredTodos.reduce(
      (groups, todo) => {
        groups[(todo.priority || 3) as number].push(todo)
        return groups
      },
      { 1: [], 2: [], 3: [] } as { [key: number]: TodoModel[] },
    )
  }, [filteredTodos])

  const handleTodoEdit = (todo: TodoModel) => {
    setDropdownOpen(true)
    setInitialData(todo)
  }

  const handleTodoDelete = async (todo: TodoModel) => {
    await deleteTodoAction({
      ...todo,
      start_date: new Date(todo.start_date),
    })
    toast('Todo deletado!', { type: 'success' })
    refetch()
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTodos = await todoApi.getAllTodos()
        setTodos(fetchedTodos)
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error)
      }
    }
    fetchData()
  }, [refetchCount])

  return (
    <div className='mt-10 flex w-full flex-col gap-6'>
      {[1, 2, 3].map(priority => (
        <div key={priority}>
          <TodoSeparator
            priority={priority}
            icon={<ScrollIcon size={18} />}
            title={
              priority === 3
                ? 'Alta Prioridade'
                : priority === 2
                  ? 'Média Prioridade'
                  : 'Baixa Prioridade'
            }
          />
          {groupedTodos[priority].length > 0 ? (
            groupedTodos[priority].map(todo => (
              <div
                key={todo.id}
                // className='mb-2 mt-2 flex items-center gap-2 rounded-lg bg-base-200 p-3 '>
                className={`mt=2 mb-2 flex items-center gap-2 rounded-lg p-3 ${!todo.completed ? 'bg-base-200' : 'bg-blue-100'}`}>
                <input
                  type='checkbox'
                  defaultChecked={todo.completed}
                  onChange={() => handleCheckboxClick(todo.id)}
                  className='checkbox-primary checkbox checkbox-sm'
                />
                <span className={`flex-grow break-all ${getStatusClass(todo.completed)}`}>
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
                <div className='btn btn-square btn-sm bg-base-100'>
                  <div className='dropdown dropdown-end'>
                    <div
                      tabIndex={0}
                      role='button'
                      className='flex items-center hover:cursor-pointer'>
                      <EllipsisVerticalIcon size={18} className='text-base-content' />
                    </div>
                    <ul
                      tabIndex={0}
                      className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'>
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
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center'>Sem tarefas nesta prioridade</p>
          )}
        </div>
      ))}
    </div>
  )
}
