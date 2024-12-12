import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 6em;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
`

export const ContainerForm = styled.div`
  width: 60%;
  display: flex;
  align-self: center;
`

export const ContainerError = styled.div`
  margin-bottom: 0.4rem;
`

export const ErrorMsg = styled.span`
  color: red;
  font-size: .8rem;
  font-weight: 300;
`

export const Title = styled.h1`
  width: 100%;
  color: #3b3b3b;
  font-weight: 400;
  padding-bottom: 1rem;
`