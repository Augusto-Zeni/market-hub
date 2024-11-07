import styled from 'styled-components'
import isNil from 'lodash/isNil'

export const Container = styled.footer`
  padding: 3rem;
  min-height: 18rem;
  background: #dadada;
`

export const ContainerLogo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const LogoIcon = styled.div`
  box-shadow: 0 0px 20px #9090906b;
  width: ${({ size }) => (!isNil(size) ? `${size}px` : '60px')};
  height: ${({ size }) => (!isNil(size) ? `${size}px` : '60px')};
  border-radius: 30px;
`

export const LogoText = styled.span`
  color: #44bb01;
  font-weight: bold;
  font-size: 1em;
  margin-inline: 5px;
  padding-left: 5px;
`

export const Text = styled.p`
  display: block;
  font-size: 0.875rem;
  line-height: 1.4;
  margin-top: 2rem;
`

export const ContainerCopy = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-size: 0.7rem;
`
