'use client'

import { ReactElement } from 'react'
import Logo from '../Logo'
import ThemeToggleButton from '../Buttons/ThemeToggleButton'
import Wrapper from '../Wrapper'

const Header = (): ReactElement => {
  return (
    <header className="w-full h-[4.063rem] z-50 sticky top-0 flex items-center bg-zinc-200 dark:bg-black-900 border-b border-green">
      <Wrapper className="w-full flex items-center justify-between">
        <Logo />
        <ThemeToggleButton />
      </Wrapper>
    </header>
  )
}

export default Header
