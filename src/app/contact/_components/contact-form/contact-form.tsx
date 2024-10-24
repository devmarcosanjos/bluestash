'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {emailFormApi} from '@/apis/email-form'
import {EmailFormData} from '@/types/utilities'

export const ContactForm = () => {
  const {register, handleSubmit} = useForm<EmailFormData>()

  const [isLoading, setIsLoading] = useState(false)
  const [messageSucceeded, setMessageSucceeded] = useState(false)

  const onSubmit = async (data: EmailFormData) => {
    setIsLoading(true)
    await emailFormApi.sendContactForm(data)
    setIsLoading(false)
    setMessageSucceeded(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex w-full flex-col gap-5'>
      <div className='flex flex-col gap-3 sm:flex-row'>
        <input
          {...register('name', {required: true})}
          type='text'
          placeholder='Your Name'
          className='input input-bordered w-full text-black placeholder:text-black/70'
        />
      </div>

      <input
        {...register('email', {required: true})}
        type='text'
        placeholder='Your Email'
        className='input input-bordered w-full text-black placeholder:text-black/70'
      />

      <textarea
        {...register('message', {required: true})}
        placeholder='Type your message'
        className='textarea textarea-bordered w-full text-black placeholder:text-black/70'
      />

      <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4'>
        <button type='submit' disabled={isLoading} className='btn btn-primary btn-block'>
          {isLoading ? <div className='loading loading-spinner' /> : 'Send Message'}
        </button>
      </div>

      {messageSucceeded && <div className='alert alert-success'>Message send successfully</div>}
    </form>
  )
}
