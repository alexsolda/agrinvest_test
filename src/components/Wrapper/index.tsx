import { ReactElement, ReactNode } from 'react'

type IWrapperProps = {
  children: ReactNode
  className?: string
}

const Wrapper = ({ className, children }: IWrapperProps): ReactElement => {
  return (
    <div
      className={`max-w-userView m-auto px-4 xl:px-0 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Wrapper
