import GreenLogoIcon from '@/assets/icons/LogoIcon/GreenLogoIcon'
import LoginModal from '@/containers/LoginModal/LoginModal'
import { useState } from 'react'
import {
  ContainerLogo,
  HeaderContainer,
  LogoIcon,
  LogoText,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
} from './styles/Header.style'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <HeaderContainer>
      <Nav>
        <NavContainer>
          <ContainerLogo href="/">
            <LogoIcon size={60}>
              <GreenLogoIcon width="60" height="60" />
            </LogoIcon>
            <LogoText>MarketHub</LogoText>
          </ContainerLogo>
        </NavContainer>
        <NavList>
          <NavItem>
            <NavLink onClick={handleClickOpen}>Acessar / Registrar-se</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Oferecer um serviço</NavLink>
          </NavItem>
        </NavList>
      </Nav>

      <LoginModal open={open} setOpen={isOpen => setOpen(isOpen)} />
    </HeaderContainer>
  )
}

export default Header
