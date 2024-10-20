'use client'

import {useActionState} from 'react'

import {Check, CircleX} from 'lucide-react'

import {handleLoginForm} from '@/app/auth/actions'

type StateProps = {
  status: boolean | null
}
export function LoginForm() {
  const [state, submitForm, isPending] = useActionState<StateProps, FormData>(handleLoginForm, {
    status: null,
  })

  return (
    <div className='mt-5 w-full'>
      <form action={submitForm} className='flex flex-col gap-3'>
        <div className='form-control '>
          <span className='label-text'>Email</span>

          <input required name='email' type='email' className='input input-bordered' />
        </div>

        <button type='submit' className='btn btn-accent btn-md'>
          {isPending ? <span className='loading loading-spinner' /> : 'Login'}
        </button>
      </form>

      {state.status === true && (
        <div role='alert' className='alert alert-success mt-5 text-white'>
          <Check size={18} />

          <span>Verifique sua caixa de entrada e clique no link para acessar sua conta.</span>
        </div>
      )}

      {state.status === false && (
        <div role='alert' className='alert alert-error mt-5 text-white'>
          <CircleX size={18} />

          <span>
            Não foi possível enviar o e-mail de acesso. Recarregue a página e tente novamente.
          </span>
        </div>
      )}
    </div>
  )
}
