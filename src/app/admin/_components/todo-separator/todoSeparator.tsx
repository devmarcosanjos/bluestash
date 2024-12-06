interface TodoSeparatorProps {
  title: string
  priority: number // Agora priority é um número
  icon?: React.ReactNode // O ícone é opcional e aceita um nó React
}

const TodoSeparator: React.FC<TodoSeparatorProps> = ({ title, priority, icon }) => {
  return (
    <div className='mb-1 flex items-center gap-2 border-b border-solid border-neutral pb-1'>
      {icon && <span className='text-primary-focus'>{icon}</span>}{' '}
      {/* Renderiza o ícone, se fornecido */}
      <p className='text-primary-focus'>{title}</p>
      <div className='flex text-primary'>
        {Array.from({ length: priority }, (_, index) => (
          <span key={index}>★</span> // Renderiza a quantidade de estrelas com base no número
        ))}
      </div>
    </div>
  )
}

export default TodoSeparator
