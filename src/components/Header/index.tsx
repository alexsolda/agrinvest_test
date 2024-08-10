'use client'

import { ReactElement } from 'react'
import Logo from '../Logo'
import ThemeToggleButton from '../Buttons/ThemeToggleButton'

const Header = (): ReactElement => {
  return (
    <div>header</div>
    // <Navbar
    //   maxWidth="xl"
    //   className="bg:zinc-200 dark:bg-black-900 border-b-1 border-green"
    // >
    //   <NavbarContent justify="start" className="px-4 xl:px-0">
    //     <NavbarItem>
    //       <Logo />
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end" className="px-4 xl:px-0">
    //     <NavbarItem>
    //       <ThemeToggleButton />
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
  )
}

export default Header
