import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import { ReactElement } from 'react'
import Logo from '../Logo'
import BtToggleTheme from '../Buttons/BtToggleTheme'

const Header = (): ReactElement => {
  return (
    <Navbar maxWidth="xl" className="bg-blck-900 border-b-1 border-green">
      <NavbarContent justify="start" className="px-4 xl:px-0">
        <NavbarItem>
          <Logo />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="px-4 xl:px-0">
        <NavbarItem>
          <BtToggleTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
