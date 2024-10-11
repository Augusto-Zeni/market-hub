import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #1b1b1b;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5em;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  box-shadow: 0 0px 20px #ffffff40;
`

export const LogoText = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  margin-inline: 5px;
`

export const ContainerLogo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 2em;
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavItem = styled.li`
  margin-left: 20px;
  list-style: none;
`

export const NavLink = styled.a`
  color: #a9a9a9;
  text-decoration: none;
  padding: 6px 15px;
  border-radius: 20px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border: 1px solid #ffffff00;

  &:hover,
  &.active {
    border: 1px solid #3592e7;
    box-shadow: 0 0px 16px #3592e79e;
    transform: translateY(-5px);
  }
`
