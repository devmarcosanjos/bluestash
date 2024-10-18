'use client'

import {useFormState} from 'react-dom'

import {login} from '@/app/auth/actions'

export const LoginForm = () => {
  const [state, submitForm, isPending] = useFormState(login, null)

  console.log({state})
  console.log({isPending})

  return (
    <form className='mt-5 flex flex-col gap-3' action={submitForm}>
      <div className='form-control '>
        <span className='label-text'>Email</span>
        <input type='email' name='email' className='input input-bordered' />
      </div>
      <button type='submit' className='btn btn-accent btn-md'>
        Login
      </button>
    </form>
  )
}
