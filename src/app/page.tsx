import {Header, Hero} from '@/app/_components'
import {loadUserData} from '@/server/functions/user.function'

export default async function Home() {
  const res = await loadUserData()

  console.log({res})

  return (
    <div className='flex h-screen w-full flex-col items-center'>
      <Header />
      <Hero />
    </div>
  )
}
