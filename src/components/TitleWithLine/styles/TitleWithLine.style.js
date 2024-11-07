import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Title = styled.i`
  color: #44bb01;
  font-size: ${({ $fontSize }) => `${$fontSize}`};
  // font-size: 2.5rem;
  font-weight: 500;
`

export const Line = styled.hr`
  flex: 1;
  margin: 0;
  border: none;
  border-top: 1px solid #44bb01;
`
