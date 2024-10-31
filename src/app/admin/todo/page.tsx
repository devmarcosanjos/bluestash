import { TodoList } from '@/app/admin/_components'

export default function Page() {
  return (
    <div className='flex w-full max-w-screen-lg flex-col '>
      <h1 className='mb-10 text-3xl'>Lista Todo</h1>
      <TodoList />
    </div>
  )
}
