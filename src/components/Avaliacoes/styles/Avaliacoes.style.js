import LinearProgress from '@mui/material/LinearProgress'
import style from '@mui/material/styles/styled'
import { Star } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderAvaliacoes = styled.header`
  display: flex;
  gap: 1rem;
`

export const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.2rem;
`

export const StyledStar = styled(Star)`
  width: 1rem;
  height: 1rem;
  color: #fbbf24;
  fill: #fbbf24;
`

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.875rem;
`

export const QtdSpan = styled.span`
  margin-left: 0.2rem;
`

export const WithoutComments = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`

export const WithoutLabel = styled.i`
  font-weight: 300;
  font-size: 1rem;
`

export const BorderLinearProgress = style(LinearProgress)(() => ({
  '&': {
    width: '100%',
    margin: '0.7rem 0',
    height: '0.5rem',
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    outline: '2px solid #fff',
  },
  '& .MuiLinearProgress-bar1Determinate': {
    backgroundColor: '#44BB01',
    borderRadius: 5,
  },
}))
