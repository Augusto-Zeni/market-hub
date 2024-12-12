import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 6em;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
`

export const CardsContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`

export const ContainerFilter = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`

export const HrFilter = styled.hr`
  margin: .5rem 0;
  border: none;
  border-top: 1px solid #d4d4d4;
`

export const Form = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: .5rem;
`