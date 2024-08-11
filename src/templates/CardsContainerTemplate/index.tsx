'use client'

import CardContainer from '@/components/CardContainer'
import Counter from '@/components/Counter'
import ModalContainer from '@/components/ModalContainer'
import Wrapper from '@/components/Wrapper'
import { ReactElement, useState } from 'react'
import FormTemplate from '../FormTemplate'

import { IoListCircle, IoImages } from 'react-icons/io5'
import { TbSquareRoundedPlusFilled } from 'react-icons/tb'
import { SiGoogleforms } from 'react-icons/si'
import { MdWeb } from 'react-icons/md'
import { HiMiniClipboardDocumentList } from 'react-icons/hi2'

const CardsContainerTemplate = (): ReactElement => {
  const [isCounterModalOpen, setIsCounterModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

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
          onClick={() => setIsCounterModalOpen(true)}
        />
        <CardContainer
          title="Formulário"
          Icon={SiGoogleforms}
          onClick={() => setIsFormModalOpen(true)}
        />
        <CardContainer title="Usuários (SSR)" Icon={MdWeb} href="/usuarios" />
        <CardContainer
          title="Artigos (Otimização de imagens)"
          Icon={IoImages}
          href="/artigos"
        />
        <CardContainer
          title="Listagem refatorada (Complexidade)"
          Icon={HiMiniClipboardDocumentList}
          href="/listagem-crud"
        />
      </Wrapper>
      <ModalContainer
        isOpen={isCounterModalOpen}
        onClose={() => setIsCounterModalOpen(false)}
        title="Contador"
      >
        <Counter />
      </ModalContainer>

      <ModalContainer
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="Formulário"
      >
        <FormTemplate />
      </ModalContainer>
    </>
  )
}

export default CardsContainerTemplate
