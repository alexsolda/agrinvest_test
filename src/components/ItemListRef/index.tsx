import { ReactElement } from 'react'

import Item from './Item'

export type IItemData = {
  id: string
  name: string
  occupation: string
}

type IItemListProps = {
  items: IItemData[]
}

const ItemListRef = ({ items }: IItemListProps): ReactElement => {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          occupation={item.occupation}
        />
      ))}
    </div>
  )
}

export default ItemListRef
