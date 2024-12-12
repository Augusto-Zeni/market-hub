import PropTypes from 'prop-types'
import {
  BarContainer,
  BorderLinearProgress,
  Container,
  HeaderAvaliacoes,
  QtdSpan,
  StyledStar,
  Title,
  WithoutComments,
  WithoutLabel,
} from './styles/Avaliacoes.style'

const Avaliacoes = ({ avarage, qtdTotal, umaEstrelaQtd, duasEstrelaQtd, tresEstrelaQtd, quatroEstrelaQtd, cincoEstrelaQtd }) => {
  return (
    <Container>
      {avarage !== 0 && (
        <HeaderAvaliacoes>
          <Title>
            Nota: {avarage} <StyledStar />
          </Title>
          <Title>Quantidade: {qtdTotal}</Title>
        </HeaderAvaliacoes>
      )}

      {avarage === 0 ? (
        <WithoutComments>
          <WithoutLabel>
            Esse perfil não recebeu uma avaliação ainda
          </WithoutLabel>
        </WithoutComments>
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}

Avaliacoes.propTypes = {
  avarage: PropTypes.number,
  qtdTotal: PropTypes.number,
  umaEstrelaQtd: PropTypes.number,
  duasEstrelaQtd: PropTypes.number,
  tresEstrelaQtd: PropTypes.number,
  quatroEstrelaQtd: PropTypes.number,
  cincoEstrelaQtd: PropTypes.number,
}

export default Avaliacoes
