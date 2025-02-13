import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='container grid gap-4 text-wrap p-2 py-20 text-center'>
      <p className='text-/6 justify-center font-bold text-primary-content'>É totalmente grátis</p>
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
          className='rounded-lg'
          src='/bluestash-ladingpage.png'
        />
      </div>
    </div>
  )
}
