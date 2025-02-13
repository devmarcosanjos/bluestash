import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='container mx-5 grid gap-4 text-wrap p-2 py-20 text-center'>
      <p className='text-/6 justify-center font-bold text-primary-content'>7 dias grátis</p>
      <h1 className='text-2xl text-primary-content md:text-4xl lg:text-6xl'>
        Transforme suas ideias em ações. Organize seu dia, conquiste seus objetivos.
      </h1>
      <p className='text-natural-content text-lg'>
        A produtividade que você precisa, de um jeito simples e eficiente!
      </p>
      <div className='flex items-center justify-center rounded-md'>
        <Image
          alt=''
          width={500}
          height={300}
          src='/bluestash-ladingpage.png'
          className='h-auto max-w-[100%] rounded-lg object-cover lg:max-w-[500px]'
        />
      </div>
    </div>
  )
}
