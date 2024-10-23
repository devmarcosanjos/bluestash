import {TodoList} from './_components/todoList'

export default function Page() {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-10 text-3xl'>Lista Todo</h1>
      <TodoList />
    </div>
  )
}
