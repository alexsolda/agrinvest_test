import { IItemData } from '@/components/ItemListRef'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type IItemsState = {
    items: IItemData[]
    originalItems: IItemData[]
    addItem: (item: IItemData) => void
    searchItem: (search: string) => void
    clearSearch: () => void
    deleteItem: (id: string) => void
    updateItem: (item: IItemData) => void
}

const initialData: IItemData[] = [
  { id: '1', name: 'John Doe', occupation: 'Software Engineer' },
  { id: '2', name: 'Jane Smith', occupation: 'Product Manager' },
  { id: '3', name: 'Alice Johnson', occupation: 'UX Designer' },
  { id: '4', name: 'Bob Brown', occupation: 'Data Scientist' },
  { id: '5', name: 'Emma Davis', occupation: 'Marketing Specialist' },
  { id: '6', name: 'Michael Wilson', occupation: 'DevOps Engineer' },
  { id: '7', name: 'Sophia Martinez', occupation: 'Business Analyst' },
  { id: '8', name: 'James Anderson', occupation: 'Frontend Developer' },
  { id: '9', name: 'Olivia Taylor', occupation: 'Sales Representative' },
  { id: '10', name: 'William Moore', occupation: 'Technical Writer' }
]

export const useItems = create<IItemsState>()(persist((set, get) => ({
    items: initialData,
    originalItems: initialData,
    addItem: (item: IItemData) => {
      const newState = [item, ...get().items]
      set({
        items: newState,
        originalItems: newState
      })
    },
    searchItem: (search: string) => {
      const filtered = get().originalItems.filter(item => {
        const lowerCaseSearch = search.toLowerCase()

        if(item.name.toLocaleLowerCase().includes(lowerCaseSearch)
          || item.occupation.toLowerCase().includes(lowerCaseSearch)) {
          return item
        }
      })

      set({
        items: filtered
      })
    },
    clearSearch: () => {
      set({
        items: get().originalItems
      })
    },
    deleteItem: (id: string) => {
      const filtered = get().originalItems.filter(item => item.id !== id)

      set({
        items: filtered,
        originalItems: filtered
      })
    },
    updateItem: (item: IItemData) => {
      const newItems = get().originalItems.map(data => {
        if(data.id === item.id) {
          return {
            id: data.id,
            name: item.name,
            occupation: item.occupation
          }
        }

        return data
      })

      set({
        items: newItems,
        originalItems: newItems
      })
    }
  }), {
    name: 'items'
  }))
