import Input from '@/components/Input'
import { useItems } from '@/stores/Items'
import { ReactElement, useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import ModalContainer from '@/components/ModalContainer'
import BtDefault from '@/components/Buttons/BtDefault'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { IAddItemData } from '../AddItem'

type IItemProps = {
  id: string
  name: string
  occupation: string
}

const Item = ({ id, name, occupation }: IItemProps): ReactElement => {
  const { deleteItem, updateItem } = useItems()

  const [isUpdateModalOpen, setIsModalUpdateOpen] = useState(false)

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

  useEffect(() => {
    if (isUpdateModalOpen) {
      reset({
        name: name,
        occupation: occupation
      })
    }
  }, [isUpdateModalOpen, name, occupation, reset])

  const handleDeleteItem = (id: string) => deleteItem(id)

  const handleUpdateItem: SubmitHandler<IAddItemData> = (data, e) => {
    e?.preventDefault()

    const newItem = {
      id,
      name: data.name,
      occupation: data.occupation
    }

    updateItem(newItem)
    reset()
    setIsModalUpdateOpen(false)
  }

  return (
    <>
      <div
        key={`key-${id}`}
        className="py-3 flex flex-col md:flex-row items-center justify-between border-b border-zinc-400 dark:border-neutral-800"
      >
        <p>{name}</p>
        <p className="text-center">{occupation}</p>
        <div className="flex mt-6 md:mt-0 items-center jutify-center gap-3">
          <MdEdit
            size={20}
            className="text-green cursor-pointer"
            onClick={() => setIsModalUpdateOpen(true)}
          />
          <MdDelete
            size={20}
            className="text-red-800 cursor-pointer"
            onClick={() => handleDeleteItem(id)}
          />
        </div>
      </div>

      <ModalContainer
        title="Atualizar item"
        isOpen={isUpdateModalOpen}
        onClose={() => setIsModalUpdateOpen(false)}
      >
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleUpdateItem)}
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

export default Item
