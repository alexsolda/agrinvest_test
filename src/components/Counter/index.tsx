'use client'

import { ReactElement, useState } from 'react'
import BtDefault from '../Buttons/BtDefault'
import { Checkbox, Field, Label } from '@headlessui/react'

enum HandleCounterTypes {
  plus,
  sub
}

const Counter = (): ReactElement => {
  const [counterValue, setCounterValue] = useState(0)
  const [allowNegatives, setAllowNegatives] = useState(true)

  const handleCounter = (type: HandleCounterTypes) => {
    setCounterValue((prev) => {
      if (type === HandleCounterTypes.sub && prev === 0 && !allowNegatives) {
        return prev
      }

      if (type === HandleCounterTypes.sub) {
        return prev - 1
      }

      return prev + 1
    })
  }

  const handleAllowNegatives = () => {
    setAllowNegatives(!allowNegatives)

    if (counterValue < 0) {
      setCounterValue(0)
    }
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex lg:flex-row flex-col items-center jutify-center gap-6">
        <BtDefault
          title="Decrementar"
          disabled={counterValue === 0 && !allowNegatives}
          onClick={() => handleCounter(HandleCounterTypes.sub)}
        />
        <p>{counterValue}</p>
        <BtDefault
          title="Incrementar"
          onClick={() => handleCounter(HandleCounterTypes.plus)}
        />
      </div>
      <Field className="flex items-center gap-2">
        <Checkbox
          checked={allowNegatives}
          onClick={() => handleAllowNegatives()}
          className="group block size-4 rounded border bg-white dark:bg-black-900 data-[checked]:bg-green"
        >
          <svg
            className="stroke-white opacity-0 group-data-[checked]:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox>
        <Label>Permitir valores negativos</Label>
      </Field>
    </div>
  )
}

export default Counter
