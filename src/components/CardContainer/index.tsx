import { ReactElement } from 'react'
import Link from 'next/link'
import { IconBaseProps } from 'react-icons'
import { IoIosArrowForward } from 'react-icons/io'

type ICardContainerProps = {
  title: string
  Icon: React.ElementType<IconBaseProps>
  onClick?: () => void
  href?: string
}

const CardContainer = ({
  title,
  Icon,
  onClick,
  href
}: ICardContainerProps): ReactElement => {
  const content = (
    <>
      <div className="flex items-center justify-center p-6 text-green border-b border-zinc-400 dark:border-neutral-800 group-hover:text-white">
        <Icon size={100} />
      </div>
      <div className="p-6 flex items-center justify-center gap-3 group-hover:text-white">
        <p className="text-xl group-hover:text-white">{title}</p>
        <IoIosArrowForward size={25} />
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} passHref>
        <div className="group w-full bg-white dark:bg-black-700 cursor-pointer rounded-lg border border-zinc-400 dark:border-neutral-800 transition hover:scale-105 hover:bg-green dark:hover:bg-green active:scale-95">
          {content}
        </div>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="group w-full bg-white dark:bg-black-700 cursor-pointer rounded-lg border border-zinc-400 dark:border-neutral-800 transition hover:scale-105 hover:bg-green dark:hover:bg-green active:scale-95"
    >
      {content}
    </button>
  )
}

export default CardContainer
