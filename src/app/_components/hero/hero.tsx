export const Hero = () => {
  return (
    <div className='hero min-h-screen bg-gradient-to-r from-blue-500 to-purple-600'>
      <div className='hero-content text-center'>
        <div className='max-w-2xl'>
          <h1 className='animate-fade-in-down text-8xl font-bold text-white'>
            BLUE<span className='text-8xl font-thin text-white opacity-80'>STASH</span>
          </h1>
          <p className='animate-fade-in-up mb-8 mt-6 text-lg text-white/80'>
            Aplicação de gerenciamento de tarefas intuitiva e eficiente.
          </p>
          <div className='animate-fade-in-up flex justify-center gap-4'></div>
        </div>
      </div>
    </div>
  )
}
