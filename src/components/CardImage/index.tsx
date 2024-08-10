'use client'

import Image from 'next/image'
import { ReactElement, useEffect, useState } from 'react'

type ICardImageProps = {
  title: string
  src: string
  alt: string
}

const CardImage = ({ title, src, alt }: ICardImageProps): ReactElement => {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null)

  useEffect(() => {
    const imageBlur = async () => {
      try {
        const res = await fetch(src)
        const arrayBuffer = await res.arrayBuffer()
        const base64String = Buffer.from(arrayBuffer).toString('base64')
        setBlurDataURL(`data:image/png;base64,${base64String}`)
      } catch (error) {
        console.error('Erro ao carregar imagem para blur:', error)
      }
    }

    if (src) {
      imageBlur()
    }
  }, [src])

  return (
    <div className="p-3 rounded-lg bg-white dark:bg-black-700 shadow-md border border-zinc-400 dark:border-neutral-800">
      <div className="relative w-full h-[300px]">
        <Image
          src={src}
          alt={alt}
          fill
          objectFit="cover"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL={`data:image/png;base64,${blurDataURL}`}
        />
      </div>
      <p className="py-6 ">{title}</p>
    </div>
  )
}

export default CardImage
