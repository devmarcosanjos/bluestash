interface SummaryCardProps {
  icon: string
  title: string
  value: string
}

const SummaryCard = ({ icon, title, value }: SummaryCardProps) => {
  return (
    <div className='rounded-xl bg-primary-content p-4'>
      <div className='mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-secondary-content bg-opacity-10 text-primary'>
        {icon}
      </div>
      <p className='text-sm font-medium text-primary'>{title}</p>
      <p className='text-2xl font-semibold text-primary'>{value}</p>
    </div>
  )
}

export default SummaryCard
