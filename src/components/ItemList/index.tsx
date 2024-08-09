import { ReactElement } from 'react'

type IItemListProps = {
  items: string[]
}

const ItemList = ({ items }: IItemListProps): ReactElement => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => (
        <li
          key={`key-${item}`}
          className="py-2 list-disc list-inside border-b border-neutral-800"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ItemList
