import {Footer, Header} from '@/app/_components'
import {ContactForm} from '@/app/contact/_components'

export default function Page() {
  return (
    <div className='flex min-h-screen w-full flex-col '>
      <div className='flex h-screen w-full flex-col items-center'>
        <Header />
        <div className='w-full flex-1 bg-base-200 pt-10'>
          <div className='mx-auto w-full py-5 md:p-10 md:py-0 lg:w-1/2'>
            <h1 className='text-center text-2xl font-semibold text-black sm:text-3xl'>
              Contact us
            </h1>
            <p className='mt-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa quidem rerum,
              voluptate dignissimos impedit exercitationem quod consequatur veritatis alias
              repudiandae.
            </p>

            <div className='mx-auto mt-8 w-full max-w-screen-sm'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
