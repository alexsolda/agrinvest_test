import Title from '@/components/Typography/Title'
import ItemListRefTemplate from '@/templates/ItemListRefTemplate'
import { ReactElement } from 'react'

const Crud = (): ReactElement => {
  return (
    <main className="flex flex-col my-6">
      <Title text="Listagem refatorada" />
      <ItemListRefTemplate />
    </main>
  )
}

export default Crud
