import { PlusIcon } from 'lucide-react'

export const ButtonNewTask = () => {
  return (
    <div className='dropdown dropdown-end dropdown-top'>
      <div tabIndex={0} role='button' className='flex items-center hover:cursor-pointer'>
        <button className='btn btn-primary flex items-center gap-2 rounded-lg px-4 py-2'>
          <PlusIcon size={18} />
          <span>New Task</span>
        </button>
      </div>

      <ul
        tabIndex={0}
        className='menu dropdown-content z-[1] w-96 rounded-lg border border-gray-200 bg-white p-4 shadow-lg'>
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

        <li className='mb-3'>
          <select className='select select-bordered w-full rounded-lg bg-gray-50 text-gray-700'>
            <option disabled selected>
              Which list?
            </option>
            <option>Todo List</option>
            <option>Work</option>
            <option>Frella</option>
          </select>
        </li>

        <li className='mb-3'>
          <textarea
            placeholder='Add notes'
            className='textarea w-full resize-none rounded-lg bg-gray-50 text-gray-700'></textarea>
          rows={3}
        </li>

        <li className='mb-3'>
          <select className='select select-bordered w-full rounded-lg bg-gray-50 text-gray-700'>
            <option disabled selected>
              Set priority
            </option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </li>

        <div className='mt-4 flex justify-end gap-2'>
          <button className='btn rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600'>
            Save
          </button>
          <button className='btn rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600'>
            Reset
          </button>
        </div>
      </ul>
    </div>
  )
}
