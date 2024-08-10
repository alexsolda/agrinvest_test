'use client'

import { ReactElement, useState } from 'react'
import BtDefault from '../Buttons/BtDefault'

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
      {/* <Checkbox
        color="default"
        radius="lg"
        isSelected={allowNegatives}
        onClick={() => handleAllowNegatives()}
      >
        Permitir valores negativos.
      </Checkbox> */}
    </div>
  )
}

export default Counter
