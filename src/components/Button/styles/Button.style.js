import styled from 'styled-components'

export const ButtonComponent = styled.button`
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 0;
  background: #44bb01;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;
  border: 1px solid transparent;

  &:hover,
  &:focus-within {
    border: 1px solid #44bb01;
    box-shadow: 0 0px 10px #44bb0142;
    background: transparent;
    color: #44bb01;
  }

  &:disabled {
    opacity: .7;
  }
`
