export function PriorityLabel({ priority }: { priority: 1 | 2 | 3 }) {
  const priorityMap = {
    1: 'Alta',
    2: 'Média',
    3: 'Baixa',
  }

  return (
    <span className='badge indicator-item badge-primary indicator-top'>
      {`Prioridade ${priorityMap[priority]}`}
    </span>
  )
}
