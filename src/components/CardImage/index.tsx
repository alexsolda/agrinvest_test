import Image from 'next/image'
import { ReactElement } from 'react'

type ICardImageProps = {
  title: string
  src: string
  alt: string
}

const CardImage = async ({
  title,
  src,
  alt
}: ICardImageProps): Promise<ReactElement> => {
  const imageBlur = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString('base64')
  })

  return (
    <div className="p-3 rounded-lg bg-white dark:bg-black-700 shadow-md border border-zinc-400 dark:border-neutral-800">
      <div className="relative w-full h-[300px]">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL={`data:image/png;base64,${imageBlur}`}
        />
      </div>
      <p className="py-6 ">{title}</p>
    </div>
  )
}

export default CardImage
