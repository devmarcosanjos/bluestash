import {Header, Hero} from '@/app/_components'

export default async function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center'>
      <Header />
      <Hero />
    </div>
  )
}
