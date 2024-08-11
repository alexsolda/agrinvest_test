'use client'

import ItemListRef from '@/components/ItemListRef'
import AddItem from '@/components/ItemListRef/AddItem'
import SearchItem from '@/components/ItemListRef/SearchItem'
import { useItems } from '@/stores/Items'

const ItemListRefTemplate = () => {
  const { items, originalItems, clearSearch } = useItems()
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 md:gap-0 lg:gap-0 md:flex-row lg:flex-row md:items-center lg:items-center justify-between">
          <AddItem />
          <SearchItem />
        </div>
        <div className="flex flex-col gap-3 md:gap-6 lg:gap-6">
          {items.length !== originalItems.length && (
            <p
              className="md:self-end lg:self-end cursor-pointer hover:underline hover:decoration-solid text-red-800"
              onClick={() => clearSearch()}
            >
              Limpar busca
            </p>
          )}
          {items.length > 0 ? (
            <ItemListRef items={items} />
          ) : (
            <p className="text-center text-lg">Sem itens para exibir.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ItemListRefTemplate
