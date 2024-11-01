import { Mail, User2 } from 'lucide-react'

export default function Page() {
  return (
    <div className=' w-full rounded-lg bg-white p-8'>
      <h1 className='mb-6 text-center text-3xl font-semibold text-gray-700'>Profile</h1>

      <div className='flex flex-col gap-4'>
        <label className='input-group flex items-center rounded-lg border border-base-300 bg-white px-2 py-2'>
          <Mail size={20} className='text-base-content' />
          <input
            type='text'
            placeholder='Email'
            className='ml-2 w-full bg-transparent p-2 text-base-content outline-none'
          />
        </label>

        <label className='input-group flex items-center rounded-lg border border-base-300 bg-white px-2 py-2'>
          <User2 size={20} className='text-base-content' />
          <input
            type='text'
            placeholder='Name'
            className='ml-2 w-full bg-transparent p-2 text-base-content outline-none'
          />
        </label>

        <label className='form-control w-full'>
          <span className='mb-2 block text-gray-600'>Picture</span>
          <input
            type='file'
            className='file-input file-input-bordered file-input-primary w-full rounded-lg'
          />
        </label>

        <div className='mt-6 flex justify-end gap-3'>
          <button className='btn rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600'>
            Save
          </button>
          <button className='btn rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
