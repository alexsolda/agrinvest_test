import Title from '@/components/Typography/Title'
import ArticlesTemplate from '@/templates/ArticlesTemplate'
import { ReactElement } from 'react'

const Articles = (): ReactElement => {
  return (
    <main className="flex flex-col my-6">
      <Title text="Artigos | Otimização de imagens" />
      <ArticlesTemplate />
    </main>
  )
}

export default Articles
