interface SummaryCardProps {
  icon: React.ReactNode
  title: string
  value: string
}

const SummaryCard = ({ icon, title, value }: SummaryCardProps) => {
  return (
    <div ata-theme='blueStash' className='rounded-xl bg-neutral p-4'>
      <div className='mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-primary-content bg-opacity-10 text-primary-content'>
        {icon}
      </div>
      <div className='inline-flex w-full items-center justify-between'>
        <p className='text-lg font-medium text-primary-content'>{title}</p>
        <p className='text-right text-6xl font-semibold text-primary'>{value}</p>
      </div>
    </div>
  )
}

export default SummaryCard
