import ItemList from '@/components/ItemList'
import Title from '@/components/Typography/Title'
import { ReactElement } from 'react'

const data = ['Item 1', 'Item 2', 'Item 3']

const Items = (): ReactElement => {
  return (
    <main className="flex flex-col my-6">
      <Title text="Listagem de itens" />
      <ItemList items={data} />
    </main>
  )
}

export default Items
