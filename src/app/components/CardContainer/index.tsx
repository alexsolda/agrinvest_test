import { ReactElement } from 'react'

import { IoListCircle } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'

const CardContainer = (): ReactElement => {
  return (
    <div className="group w-full bg-black-700 cursor-pointer rounded-lg border border-neutral-800 transition hover:scale-105 hover:bg-green active:scale-95">
      <div className="flex items-center justify-center p-6 text-green border-b border-neutral-800 group-hover:text-white">
        <IoListCircle size={100} />
      </div>
      <div className="p-6 flex items-center justify-center gap-3">
        <p className="text-xl">Listagem de itens</p>
        <IoIosArrowForward size={25} />
      </div>
    </div>
  )
}

export default CardContainer
