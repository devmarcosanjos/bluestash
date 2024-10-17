import {login} from './actions'

export default function Page() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-primary'>
      <div className='flex w-[350px] flex-col rounded-md bg-base-100 px-3 py-6 shadow-md '>
        <h1 className='font-bold'>Login with email</h1>
        <form className='mt-5 flex flex-col gap-3' action={login}>
          <div className='form-control '>
            <span className='label-text'>Email</span>
            <input type='email' name='email' className='input input-bordered' />
          </div>
          <button type='submit' className='btn btn-accent btn-md'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
