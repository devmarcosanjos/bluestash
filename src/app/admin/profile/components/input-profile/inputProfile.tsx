'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

import { UserModel } from '@/types/models'
import { supabase } from '@/libs/supabase/supabase-client'
import {
  deleteAccountAction,
  deleteTodosByUser,
  updateUserAction,
} from '@/app/admin/profile/actions'

type Props = {
  user: UserModel
}

const InputProfile = ({ user }: Props) => {
  const router = useRouter()

  const [name, setName] = useState(user?.name || '')
  const [originalName, setOriginalName] = useState(user?.name || '')
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar o modal
  const [isButtonReset, setIsButtonReset] = useState(true)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSave = async () => {
    setOriginalName(name)
    await updateUserAction({
      ...user,
      name: name,
    })
  }

  const isNameChanged = name !== originalName

  const handleDeleteAccount = () => {
    setIsModalOpen(true)
    setIsButtonReset(false)
  }

  const handleDeleteTodos = async () => {
    setIsModalOpen(true)
    setIsButtonReset(true)
  }

  const confirmDeleteTodos = async () => {
    await deleteTodosByUser()
    setIsModalOpen(false)
  }

  const confirmDeleteAccount = async () => {
    await deleteAccountAction()
    setIsModalOpen(false)
    await supabase.auth.signOut()
    router.push('/auth')
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!user) {
    return <div>Erro: informações do usuário não disponíveis.</div>
  }

  return (
    <div className='w-full rounded-lg bg-white p-8 shadow-md'>
      <div className='flex flex-col gap-6'>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text text-lg font-semibold'>Nome completo</span>
          </label>
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='Nome Completo'
            className='input input-bordered w-full'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text text-lg font-semibold'>Email</span>
          </label>
          <input
            readOnly
            type='email'
            value={user?.email}
            placeholder='email@email.com'
            className='input input-bordered w-full cursor-not-allowed'
          />
        </div>

        <div className='mt-6 flex justify-end gap-4'>
          <button
            onClick={handleSave}
            disabled={!isNameChanged}
            className='btn rounded-lg bg-green-500 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:bg-green-600 focus:outline-none'>
            Salvar
          </button>
        </div>

        {/* Botão para excluir conta */}
        <div className='form-control mt-12 w-full space-y-6'>
          <label className='label'>
            <span className='label-text text-lg font-semibold'>Deseja reset a conta?</span>
          </label>
          <button
            onClick={handleDeleteTodos}
            className='btn rounded-lg bg-red-500 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none'>
            Reset
          </button>
          <label className='label'>
            <span className='label-text text-lg font-semibold'>
              Deseja excluir sua conta e todos seus registros?
            </span>
          </label>
          <button
            onClick={handleDeleteAccount}
            className='btn rounded-lg bg-red-500 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none'>
            Excluir
          </button>
        </div>
      </div>

      {/* Modal de confirmação de exclusão */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-1/3 rounded-lg bg-white p-6 text-center shadow-lg'>
            <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Tem certeza?</h2>
            <p className='mb-4 text-gray-600'>
              Esta ação não pode ser desfeita. Todos os seus dados serão apagados.
            </p>
            <div className='flex justify-around'>
              <button
                onClick={closeModal}
                className='btn rounded-md bg-gray-500 px-6 py-2 text-white hover:bg-gray-600 focus:outline-none'>
                Cancelar
              </button>
              {isButtonReset ? (
                <button
                  onClick={confirmDeleteTodos}
                  className='btn rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600 focus:outline-none'>
                  Confirmar Reset
                </button>
              ) : (
                <button
                  onClick={confirmDeleteAccount}
                  className='btn rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600 focus:outline-none'>
                  Confirmar Exclusão
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InputProfile
