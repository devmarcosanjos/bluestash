import { Footer, Header, Hero } from '@/app/_components'

export default async function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col '>
      <div className='flex h-screen w-full flex-col items-center'>
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  )
}
