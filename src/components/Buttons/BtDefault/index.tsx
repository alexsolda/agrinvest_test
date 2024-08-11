import { ReactElement, ButtonHTMLAttributes } from 'react'

export type IBtDefaultProps = {
  title: string
  outlined?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const BtDefault = ({
  title,
  outlined,
  ...props
}: IBtDefaultProps): ReactElement => {
  return (
    <button
      {...props}
      className={`${
        outlined
          ? 'bg-transparent border-2 border-green'
          : 'bg-green border-2 border-transparent'
      } disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 hover:scale-105 rounded-md min-w-[150px] py-2 text-white transition`}
    >
      <p className={outlined ? 'text-green font-bold' : ''}>{title}</p>
    </button>
  )
}

export default BtDefault
