import styled from "styled-components"

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TotalItems = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`

export const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PageNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Button = styled.button`
  height: 2rem;
  width: 2rem;
  padding: 0;
  border: 1px solid #44bb01;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-radius: 999999px;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    background: #44bb01;
    border: 1px solid #fff;
    box-shadow: 0 0px 10px #44bb0142;

    svg {
    width: 1rem;
    height: 1rem;
    color: #fff;
  }  
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #44bb01;
  }
`

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`