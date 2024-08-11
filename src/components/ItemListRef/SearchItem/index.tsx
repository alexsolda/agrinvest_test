'use client'

import BtDefault from '@/components/Buttons/BtDefault'
import Input from '@/components/Input'
import { useItems } from '@/stores/Items'
import { ReactElement, useState } from 'react'

const SearchItem = (): ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const { searchItem } = useItems()

  const handleSearch = () => {
    searchItem(searchValue)
    setSearchValue('')
  }

  return (
    <div className="flex flex-col md:flex-row lg:flex-row md:items-center mt-6 md:mt-0 gap-3 md:gap-1">
      <Input
        placeholder="Pesquisar..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <BtDefault title="Pesquisar" onClick={() => handleSearch()} />
    </div>
  )
}

export default SearchItem
