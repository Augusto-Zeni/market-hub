import { logout } from '@/api/logout'
import GreenLogoIcon from '@/assets/icons/LogoIcon/GreenLogoIcon'
import { useAuth } from '@/contexts/AuthContext'
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import {
  ContainerLogo,
  HeaderContainer,
  LogoIcon,
  LogoText,
  Nav,
  NavContainer,
  NavItem,
  NavLinkStyled,
  NavList,
} from './styles/Header.style'

const Header = () => {
  const location = useLocation()
  
  const { getUserType } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()

      localStorage.removeItem('userContext - market hub')

      toast.success('Logout efetuado com sucesso.')
    } catch {
      toast.error('Ops! Algo de errado aconteceu, tente novamente.')
    }
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
        {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && (
          <NavList>
            {getUserType === 'MERCHANT' && (
              <NavItem>
                <NavLinkStyled to="/service">Oferecer um serviço</NavLinkStyled>
              </NavItem>
            )}
            <NavItem>
              <NavLinkStyled to="/sign-in" onClick={handleLogout}>Logout</NavLinkStyled>
            </NavItem>
          </NavList>
        )}
        {location.pathname === '/sign-in' && (
          <NavList>
            <NavItem>
              <NavLinkStyled to="/sign-up">Registrar-se</NavLinkStyled>
            </NavItem>
          </NavList>
        )}
        {location.pathname === '/sign-up' && (
          <NavList>
            <NavItem>
              <NavLinkStyled to="/sign-in">Login</NavLinkStyled>
            </NavItem>
          </NavList>
        )}
      </Nav>
    </HeaderContainer>
  )
}

export default Header
