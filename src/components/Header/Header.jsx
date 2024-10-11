import LogoIcon from '@/assets/icons/LogoIcon/LogoIcon'
import SearchIcon from '@/assets/icons/SearchIcon/SearchIcon'
import InputIcon from '../InputIcon/InputIcon'
import { ContainerLogo, HeaderContainer, LogoText, Nav, NavContainer, NavItem, NavLink, NavList } from './styles/Header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavContainer>
          <ContainerLogo href="/">
            <LogoIcon width="60" height="60" />
            <LogoText>MarketHub</LogoText>
          </ContainerLogo>
          <InputIcon
            type="text"
            placeholder="Buscando por um serviço?"
            icon={SearchIcon}
            iconSize={25}
            fill="#a9a9a9"
            style={{ marginLeft: '1em', height: 40, padding: 5 }}
            borderRadius={15}
          />
        </NavContainer>
        <NavList>
          <NavItem>
            <NavLink href="#">Fazer Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Cadastrar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Oferecer um serviço</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
