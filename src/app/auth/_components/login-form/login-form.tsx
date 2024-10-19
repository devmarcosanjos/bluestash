'use client'

import {Check, CircleX} from 'lucide-react'
import {useActionState} from 'react'

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

          <input className='input input-bordered' name='email' required type='email' />
        </div>

        <button className='btn btn-accent btn-md' type='submit'>
          {isPending ? <span className='loading loading-spinner' /> : 'Login'}
        </button>
      </form>

      {state.status === true && (
        <div className='alert alert-success mt-5 text-white' role='alert'>
          <Check size={18} />

          <span>Verifique sua caixa de entrada e clique no link para acessar sua conta.</span>
        </div>
      )}

      {state.status === false && (
        <div className='alert alert-error mt-5 text-white' role='alert'>
          <CircleX size={18} />

          <span>
            Não foi possível enviar o e-mail de acesso. Recarregue a página e tente novamente.
          </span>
        </div>
      )}
    </div>
  )
}
