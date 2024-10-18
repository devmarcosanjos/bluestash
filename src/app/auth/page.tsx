import {LoginForm} from './_components'

export default function Page() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-primary'>
      <div className='flex w-[350px] flex-col rounded-md bg-base-100 px-3 py-6 shadow-md '>
        <h1 className='font-bold'>Login with email</h1>
        <LoginForm />
      </div>
    </div>
  )
}
