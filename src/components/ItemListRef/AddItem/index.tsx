'use client'

import BtDefault from '@/components/Buttons/BtDefault'
import Input from '@/components/Input'
import ModalContainer from '@/components/ModalContainer'
import { ReactElement, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useItems } from '@/stores/Items'

export type IAddItemData = {
  name: string
  occupation: string
}

const AddItem = (): ReactElement => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)
  const { addItem } = useItems()

  const schemaAddItemFomr = Yup.object({
    name: Yup.string().required('Preencha o nome, por favor.'),
    occupation: Yup.string().required('Preencha a ocupação, por favor.')
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAddItemData>({
    resolver: yupResolver(schemaAddItemFomr)
  })

  const handleAddNewItem: SubmitHandler<IAddItemData> = (data, e) => {
    e?.preventDefault()

    const newItem = {
      id: uuidv4(),
      name: data.name,
      occupation: data.occupation
    }

    addItem(newItem)
    reset()
    setIsAddItemModalOpen(false)
  }

  const handleCloseModal = () => {
    reset()
    setIsAddItemModalOpen(false)
  }

  return (
    <>
      <BtDefault
        title="Adicionar"
        onClick={() => setIsAddItemModalOpen(true)}
      />
      <ModalContainer
        isOpen={isAddItemModalOpen}
        onClose={() => handleCloseModal()}
        title="Adicionar novo"
      >
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleAddNewItem)}
        >
          <Input
            placeholder="Nome..."
            {...register('name')}
            error={errors.name?.message}
          />
          <Input
            placeholder="Ocupação..."
            {...register('occupation')}
            error={errors.occupation?.message}
          />
          <BtDefault title="Salvar" type="submit" />
        </form>
      </ModalContainer>
    </>
  )
}

export default AddItem
