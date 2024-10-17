import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h1>Home page</h1>
      <Link href='/auth' className='btn btn-primary btn-wide'>
        Login
      </Link>
    </div>
  )
}
