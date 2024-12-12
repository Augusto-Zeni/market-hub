import PropTypes from 'prop-types'
import {
  Avatar,
  AvatarContainer,
  ComentarioContainer,
  ComentarioText,
  Container,
  ContainerInfoTitle,
  Name,
  StyledStar
} from './styles/Comentario.style'

const Comentario = ({ nome, avaliacao, comentario }) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src="/../../profile-image.png" alt="img-avatar-comentario" />

        <Name>{nome}</Name>

        <ContainerInfoTitle>
          <StyledStar />
          {avaliacao}
        </ContainerInfoTitle>
      </AvatarContainer>

      <ComentarioContainer>
        <ComentarioText>{comentario}</ComentarioText>
      </ComentarioContainer>
    </Container>
  )
}

Comentario.propTypes = {
  nome: PropTypes.string,
  avaliacao: PropTypes.number,
  comentario: PropTypes.string,
}

export default Comentario
