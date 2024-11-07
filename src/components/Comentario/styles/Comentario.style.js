import { Star } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Avatar = styled.img`
  box-sizing: initial;
  width: 2rem;
  height: 2rem;
  border-radius: 80px;
  box-shadow: 0 0px 20px #9090906b;
`

export const Name = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
`

export const ContainerInfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

export const StyledStar = styled(Star)`
  width: 1rem;
  height: 1rem;
  color: #fbbf24;
`

export const Dot = styled.span`
  font-size: 0.8rem;
  font-weight: 100;
  margin-right: 0.4rem;
`

export const Data = styled.h3`
  font-size: 0.8rem;
  font-weight: 300;
`

export const ComentarioContainer = styled.div`
  padding: 0.8rem 0;
`

export const ComentarioText = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  line-weight: 1.4;
`
