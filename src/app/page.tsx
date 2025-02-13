import Price from '@/app/_components/price/price'
import { Footer, Header, Hero } from '@/app/_components'

export default async function Home() {
  return (
    <div className='container mx-auto flex min-h-screen w-full flex-col'>
      <div className='flex w-full flex-col items-center px-4 sm:px-6 md:px-10'>
        <Header />
        <Hero />
        <Price />
        <Footer />
      </div>
    </div>
  )
}
