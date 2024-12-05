'use client'

import React, { useState } from 'react'

import { UserModel } from '@/types/models'

type Props = {
  user: UserModel
}

const InputProfile = ({ user }: Props) => {
  const [name, setName] = useState(user?.name || '')
  const [originalName, setOriginalName] = useState(user?.name || '')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSave = (name: any) => {
    console.log('Name:', name)
    setOriginalName(name)
  }

  const isNameChanged = name !== originalName

  return (
    <div className=' w-full rounded-lg bg-white p-8'>
      <div className='flex w-full flex-col gap-4'>
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text'>Nome completo</span>
          </div>
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='Nome Completo'
            className='input input-bordered w-full'
          />
        </label>

        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text'>Email</span>
          </div>
          <input
            readOnly
            type='email'
            value={user?.email}
            placeholder='email@email.com'
            className='input input-bordered w-full cursor-not-allowed'
          />
        </label>

        <div className='mt-6 flex justify-end gap-3'>
          <button
            disabled={!isNameChanged}
            onClick={() => handleSave(name)}
            className='btn rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600'>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputProfile
