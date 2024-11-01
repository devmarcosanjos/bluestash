import { PlusIcon } from 'lucide-react'

export const ButtonNewTask = () => {
  return (
    <div className='dropdown dropdown-top'>
      <div tabIndex={0} role='button' className='flex items-center hover:cursor-pointer'>
        <button className='btn btn-primary btn-active w-32'>
          <PlusIcon size={18} />
          New task
        </button>
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-[1] w-96 rounded-box bg-base-100 p-2 shadow'>
        <li className='pb-2'>
          <label className='input  flex items-center gap-2'>
            <PlusIcon size={18} />
            <input type='text' className='grow' placeholder='Create new Task' />
          </label>
        </li>
        <li className='p-2'>
          <select className='select select-bordered  w-full'>
            <option disabled selected>
              Qual Lista?
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Frella</option>
            <option>Sem Lista</option>
          </select>
        </li>

        <li className='p-2'>
          <textarea placeholder='Add notes' className='textarea textarea-ghost'></textarea>
        </li>
        <li className='p-2'>
          <select className='select select-bordered  w-full '>
            <option disabled selected>
              Add to priority
            </option>
            <option>Low</option>
            <option>Mean</option>
            <option>Hight</option>
          </select>
        </li>
        <div className='mx-2 flex flex-row-reverse gap-2'>
          <li>
            <button className='btn btn-outline btn-success'>Save</button>
          </li>
          <li>
            <button className='btn btn-outline btn-error'>Reset</button>
          </li>
        </div>
      </ul>
    </div>
  )
}
