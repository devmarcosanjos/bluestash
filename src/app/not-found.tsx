import {merge} from '@/utils'

const NotFoundPage = async () => {
  return (
    <main className={merge(['flex h-[100vh] w-full flex-wrap items-center justify-center'])}>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
            404
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl'>
            Página não encontrada
          </p>

          <a href='/' className='flex justify-center rounded-md bg-black px-4 py-2 text-white'>
            Voltar para página inicial
          </a>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
