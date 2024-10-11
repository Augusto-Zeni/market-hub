import styled from 'styled-components'
import isNil from 'lodash/isNil'

export const Container = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  border-radius: ${({ borderRadius }) => (!isNil(borderRadius) ? `${borderRadius}px` : '35px')};
  background: transparent;
  color: #3b3b3b;
  border: 1px solid #3b3b3b;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover,
  &:focus-within {
    border: 1px solid #3592e7;
    box-shadow: 0 0px 16px #3592e79e;
    transform: translateY(-1px);
  }
`

export const InputBox = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  width: 100%;
  background: transparent;
  color: #a9a9a9;

  &:focus {
    color: #a9a9a9;
  }
`
