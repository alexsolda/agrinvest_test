'use client'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import { ReactElement } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

type IModalContainerProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactElement
}

const ModalContainer = ({
  isOpen,
  onClose,
  title,
  children
}: IModalContainerProps): ReactElement => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-md" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto shadow-xl">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white dark:bg-black-700 p-3 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="p"
              className="flex items-center justify-between  gap-1 lg:mx-8 mx-3 mt-6 dark:text-white text-black-900"
            >
              <p className="text-lg font-bold">{title}</p>
              <IoCloseOutline
                size={20}
                onClick={onClose}
                className="cursor-pointer"
              />
            </DialogTitle>
            <div className="lg:p-8 p-3">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalContainer
