import styled from 'styled-components'
import isNil from 'lodash/isNil'

export const HeaderContainer = styled.header`
  background-color: #F3F4EE;
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

export const LogoIcon = styled.div`
  box-shadow: 0 0px 20px #9090906b;
  width: ${({ size }) => !isNil(size) ? `${size}px` : '60px'};
  height: ${({ size }) => !isNil(size) ? `${size}px` : '60px'};
  border-radius: 30px;
`

export const LogoText = styled.a`
  color: #44BB01;
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
  color: #3b3b3b;
  text-decoration: none;
  padding: 6px 15px;
  border-radius: 20px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border: 1px solid #ffffff00;

  &:hover,
  &.active {
    border: 1px solid #44BB01;
    box-shadow: 0 0px 10px #44bb0142;
    transform: translateY(-5px);
  }
`
