import PropTypes from 'prop-types'
import {
  Avatar,
  AvatarContainer,
  ComentarioContainer,
  ComentarioText,
  Container,
  ContainerInfoTitle,
  Data,
  Dot,
  Name,
  StyledStar,
} from './styles/Comentario.style'

const Comentario = ({ nome, avaliacao, data, comentario }) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src="/../../profile-image.png" alt="img-avatar-comentario" />

        <Name>{nome}</Name>

        <ContainerInfoTitle>
          <StyledStar />
          {avaliacao}
        </ContainerInfoTitle>

        <ContainerInfoTitle>
          <Dot> • </Dot>
          <Data>{data}</Data>
        </ContainerInfoTitle>
      </AvatarContainer>

      <ComentarioContainer>
        <ComentarioText>{comentario}</ComentarioText>
      </ComentarioContainer>
    </Container>
  )
}

Comentario.propTypes = {
  nome: PropTypes.string.isRequired,
  avaliacao: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
}

export default Comentario
