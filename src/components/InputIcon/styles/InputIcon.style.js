import styled from 'styled-components'
import isNil from 'lodash/isNil'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ $borderRadius }) => (!isNil($borderRadius) ? `${$borderRadius}px` : '35px')};
  background: transparent;
  color: #3b3b3b;
  border: ${({ $borderColor }) => `1px solid ${$borderColor}`};
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover,
  &:focus-within {
    border: ${({ $borderColorHover }) => `1px solid ${$borderColorHover}`};
    box-shadow: ${({ $shadowColor }) => `0 0px 10px ${$shadowColor}`};
    transform: translateY(-1px) translateX(-1px);
  }
`

export const InputBox = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  width: 100%;
  background: transparent;
  color: #3b3b3b;

  &:focus {
    color: #3b3b3b;
  }
`
