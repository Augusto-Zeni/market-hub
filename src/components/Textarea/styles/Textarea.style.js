import isNil from 'lodash/isNil';
import styled from 'styled-components';

export const TextareaBox = styled.textarea`
  width: 100%;
  border: ${({ $borderColor }) => `1px solid ${$borderColor}`};
  border-radius: ${({ $borderRadius }) => (!isNil($borderRadius) ? `${$borderRadius}px` : '35px')};
  background: transparent;
  color: #3b3b3b;
  padding: .5rem 5px;
  outline: none;
  resize: none;
  transition: transform 0.3s, box-shadow 0.3s;
  height: auto;

  &:hover, &:focus {
    border: ${({ $borderColorHover }) => `1px solid ${$borderColorHover}`};
    box-shadow: ${({ $shadowColor }) => `0 0px 10px ${$shadowColor}`};
    transform: translateY(-1px) translateX(-1px);
  }

  &:focus {
    color: #3b3b3b;
  }
`;
