'use client'

import BtDefault from '@/components/Buttons/BtDefault'
import Input from '@/components/Input'
import { ReactElement, useState, MouseEvent, useRef } from 'react'

const FormTemplate = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uiValue, setUiValue] = useState('')

  const handleShowValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputRef.current) {
      setUiValue(inputRef.current.value)
    }
  }

  return (
    <div className="flex flex-col gap-6 jutify-center">
      <form className="flex flex-col gap-3">
        <Input placeholder="Digite um texto..." ref={inputRef} />
        <BtDefault
          title="Enviar"
          type="submit"
          onClick={(e) => handleShowValue(e)}
        />
      </form>
      {uiValue && <p>{uiValue}</p>}
    </div>
  )
}

export default FormTemplate
