'use client'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import { ReactElement } from 'react'

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
      <DialogBackdrop className="fixed inset-0 bg-yellow-300" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="flex flex-col gap-1 lg:mx-8 mx-3 mt-6 dark:text-white text-black-900"
            >
              {title}
            </DialogTitle>
            <div className="lg:p-8 p-3">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalContainer
