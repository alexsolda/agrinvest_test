import Link from 'next/link'
import { ReactElement } from 'react'

const Logo = (): ReactElement => {
  return (
    <Link href="/" passHref>
      <p className="text-white font-bold">Agrinvest.test</p>
    </Link>
  )
}

export default Logo
