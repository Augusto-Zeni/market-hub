import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-right-width: 1px;
  border-color: hsl(var(--foreground) / 0.05);
  padding: 2.5rem;
  background-color: #D8E4D2;
  color: hsl(var(--muted-foreground));
`

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerLoginFormModal = styled.div`
  flex: 1;
  color: #3b3b3b;
`

export const ContentLoginForm = styled.div`
  align-content: center;
  justify-items: center;
  height: 100%;
  padding: 1rem 3rem;
  width: 30rem;
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
