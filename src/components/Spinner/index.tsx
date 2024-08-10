import { ReactElement } from 'react'

const Spinner = (): ReactElement => {
  return (
    <div className="h-6 w-6 rounded-full border-y-2 border-l-2 border-r-2 border-r-white dark:border-r-black-700 border-green animate-spin"></div>
  )
}

export default Spinner
