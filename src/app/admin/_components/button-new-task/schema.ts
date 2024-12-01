import { z } from 'zod'

export type PriorityOptions = '1' | '2' | '3'

export const taskSchema = z.object({
  task: z.string().min(1, 'Campo obrigatório'),
  list: z.string().min(1, 'Campo obrigatório'),
  priority: z.enum(['1', '2', '3'], { message: 'Campo obrigatório' }),
  date: z.date(),
  notes: z.string().optional(),
})

export type TaskSchema = z.infer<typeof taskSchema>
