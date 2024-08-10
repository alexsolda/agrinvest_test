import CardImage from '@/components/CardImage'
import Wrapper from '@/components/Wrapper'
import { imagesData } from '@/utils/imagesData'

const ArticlesTemplate = async () => {
  return (
    <Wrapper className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {imagesData.map((img) => (
        <CardImage
          key={`key-${img.alt}`}
          title={img.title}
          alt={img.alt}
          src={img.url}
        />
      ))}
    </Wrapper>
  )
}

export default ArticlesTemplate
