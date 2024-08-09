'use client'

import CardContainer from '@/components/CardContainer'
import Counter from '@/components/Counter'
import ModalContainer from '@/components/ModalContainer'
import Wrapper from '@/components/Wrapper'
import { useDisclosure } from '@nextui-org/react'
import { ReactElement } from 'react'

import { IoListCircle } from 'react-icons/io5'
import { TbSquareRoundedPlusFilled } from 'react-icons/tb'
import { SiGoogleforms } from 'react-icons/si'
import FormTemplate from '../FormTemplate'

const CardsContainerTemplate = (): ReactElement => {
  const modalIncrement = useDisclosure()
  const modalForm = useDisclosure()

  return (
    <>
      <Wrapper className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <CardContainer
          title="Listagem de itens"
          Icon={IoListCircle}
          href="/itens"
        />
        <CardContainer
          title="Incrementador"
          Icon={TbSquareRoundedPlusFilled}
          onClick={modalIncrement.onOpen}
        />
        <CardContainer
          title="Formulário"
          Icon={SiGoogleforms}
          onClick={modalForm.onOpen}
        />
      </Wrapper>
      <ModalContainer
        isOpen={modalIncrement.isOpen}
        onOpenChange={modalIncrement.onOpenChange}
        title="Contador"
      >
        <Counter />
      </ModalContainer>

      <ModalContainer
        isOpen={modalForm.isOpen}
        onOpenChange={modalForm.onOpenChange}
        title="Formulário"
      >
        <FormTemplate />
      </ModalContainer>
    </>
  )
}

export default CardsContainerTemplate
