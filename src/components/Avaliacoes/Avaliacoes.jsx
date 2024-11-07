import PropTypes from 'prop-types'
import {
  BarContainer,
  BorderLinearProgress,
  Container,
  HeaderAvaliacoes,
  QtdSpan,
  StyledStar,
  Title,
} from './styles/Avaliacoes.style'

const Avaliacoes = ({ qtdTotal, umaEstrelaQtd, duasEstrelaQtd, tresEstrelaQtd, quatroEstrelaQtd, cincoEstrelaQtd }) => {
  return (
    <Container>
      <HeaderAvaliacoes>
        <Title>
          Nota: 4.3 <StyledStar />
        </Title>
        <Title>Quantidade: {qtdTotal}</Title>
      </HeaderAvaliacoes>

      <BarContainer>
        <span>5</span>
        <StyledStar />
        <BorderLinearProgress variant="determinate" value={(cincoEstrelaQtd / qtdTotal) * 100} />
        <QtdSpan>({cincoEstrelaQtd})</QtdSpan>
      </BarContainer>
      <BarContainer>
        <span>4</span>
        <StyledStar />
        <BorderLinearProgress variant="determinate" value={(quatroEstrelaQtd / qtdTotal) * 100} />
        <QtdSpan>({quatroEstrelaQtd})</QtdSpan>
      </BarContainer>
      <BarContainer>
        <span>3</span>
        <StyledStar />
        <BorderLinearProgress variant="determinate" value={(tresEstrelaQtd / qtdTotal) * 100} />
        <QtdSpan>({tresEstrelaQtd})</QtdSpan>
      </BarContainer>
      <BarContainer>
        <span>2</span>
        <StyledStar />
        <BorderLinearProgress variant="determinate" value={(duasEstrelaQtd / qtdTotal) * 100} />
        <QtdSpan>({duasEstrelaQtd})</QtdSpan>
      </BarContainer>
      <BarContainer>
        <span>1</span>
        <StyledStar />
        <BorderLinearProgress variant="determinate" value={(umaEstrelaQtd / qtdTotal) * 100} />
        <QtdSpan>({umaEstrelaQtd})</QtdSpan>
      </BarContainer>
    </Container>
  )
}

Avaliacoes.propTypes = {
  qtdTotal: PropTypes.number.isRequired,
  umaEstrelaQtd: PropTypes.number.isRequired,
  duasEstrelaQtd: PropTypes.number.isRequired,
  tresEstrelaQtd: PropTypes.number.isRequired,
  quatroEstrelaQtd: PropTypes.number.isRequired,
  cincoEstrelaQtd: PropTypes.number.isRequired,
}

export default Avaliacoes
