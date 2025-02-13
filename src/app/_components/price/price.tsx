import Link from 'next/link'

export default function Price() {
  return (
    <section className='mx-5 space-y-8 pb-16'>
      <div className='grid gap-6 text-center'>
        <h1 className='text-w text-3xl text-primary-content'>
          Organize seu dia por um preço que você vai adorar.
        </h1>
        <p>Melhor que barato, é grátis! 🚀</p>
      </div>
      <div className='grid gap-8 sm:grid-cols-2'>
        <div className='flex flex-col rounded-xl border border-neutral-content/50 p-8 opacity-50'>
          <h1 className='text-lg font-bold text-primary-content'>Mensal</h1>
          <p className='text-sm text-neutral-content'>Apenas</p>
          <p className='mt-7 font-bold'>
            <span className='text-2xl text-primary-content'>R$ 09,99</span>/mês
          </p>
          <button disabled className='btn btn-neutral mt-7 cursor-not-allowed opacity-50'>
            <p className='text-primary-content'>Assinar</p>
          </button>
        </div>

        <div className='relative flex flex-col rounded-xl bg-gradient-to-r from-[#4B2DBB] to-[#B5446B] p-8 p-8'>
          {/* Badge */}
          <div className='text-sx absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 font-bold text-white'>
            FREE
          </div>
          <h1 className='text-lg font-bold text-white'>Anual</h1>
          <p className='text-sm text-gray-300'>Economize com</p>
          <p className='mt-7 font-bold'>
            <span className='text-2xl text-white'>R$00,00</span>/ano
          </p>
          <div className='btn mt-7 bg-neutral hover:bg-opacity-75'>
            <Link href='/auth' className='text-primary-content'>
              Assinar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
