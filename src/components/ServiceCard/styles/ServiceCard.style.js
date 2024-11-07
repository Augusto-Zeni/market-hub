import { ArrowUpRight, MapPin, Star } from 'lucide-react'
import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 20rem;
  background: #fff;
  border-radius: 2rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  box-shadow: ${({ $hasBoxShadow }) => ($hasBoxShadow ? '0 10px 50px rgba(0, 0, 0, 0.1)' : 'unset')};
  transform: translateY(0);
  cursor: pointer;

  &:hover {
    box-shadow: ${({ $hasBoxShadow }) => ($hasBoxShadow ? '0 20px 75px rgba(0, 0, 0, 0.1)' : 'unset')};
    transform: translateY(-3px);
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 17.5rem;
  min-width: 20rem;
`

export const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 32px;
`

export const RatingBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ffffff47;
  backdrop-filter: blur(4px);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  z-index: 1;
`

export const RatingText = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.4rem;
  background: white;
  border-radius: 32px 32px 24px 24px;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: translateY(-3px);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const InfoContainer = styled.div`
  flex: 1;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.875rem;
  }
`

export const Price = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #44bb01;
`

export const ActionButton = styled.button`
  display: flex;
  border: 1px solid #dadada;
  padding: 0.5rem;
  border-radius: 9999px;
  background: white;
  border: 1px solid #eee;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.05);
  }

  ${CardContainer}:hover & {
    transform: translateY(-5px);
    border: 1px solid #44bb01;
    cursor: pointer;
  }
`

export const StyledStar = styled(Star)`
  width: 1rem;
  height: 1rem;
  color: #fbbf24;
  fill: #fbbf24;
`

export const StyledMapPin = styled(MapPin)`
  width: 1rem;
  height: 1rem;
`

export const StyledArrowUpRight = styled(ArrowUpRight)`
  width: 1.25rem;
  height: 1.25rem;
  color: #666;

  ${CardContainer}:hover & {
    color: #44bb01;
  }
`

export const CardWrapper = styled.div`
  padding: 1rem;
  position: relative;
`
