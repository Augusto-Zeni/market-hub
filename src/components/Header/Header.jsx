import GreenLogoIcon from '@/assets/icons/LogoIcon/GreenLogoIcon'
import SearchIcon from '@/assets/icons/SearchIcon/SearchIcon'
import LoginModal from '@/containers/LoginModal/LoginModal'
import { useState } from 'react'
import InputIcon from '../InputIcon/InputIcon'
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
          <InputIcon
            id="header-serch"
            type="text"
            placeholder="Buscando por um serviço?"
            icon={SearchIcon}
            iconSize={25}
            fill="#44BB01"
            borderRadius={15}
            borderColor="#44BB01"
            borderColorHover="#44BB01"
            shadowColor="#44bb0142"
            style={{ marginLeft: '1em', height: 40, padding: 5 }}
          />
        </NavContainer>
        <NavList>
          <NavItem>
            <NavLink onClick={handleClickOpen} href="#">
              Fazer Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Cadastrar</NavLink>
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
