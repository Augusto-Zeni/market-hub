import CalendarIcon from '@/assets/icons/CalendarIcon/CalendarIcon'
import CellphoneIcon from '@/assets/icons/CellphoneIcon/CellphoneIcon'
import LocationIcon from '@/assets/icons/LocationIcon/LocationIcon'
import StarIcon from '@/assets/icons/StarIcon/StarIcon'
import WorkIcon from '@/assets/icons/WorkIcon/WorkIcon'
import {
  AboutSection,
  Button,
  Container,
  ContainerContact,
  ContainerImage,
  ContainerInfos,
  InfoLabel,
  ProfileImg,
  Row,
  SectionProfileInfo,
  Title,
} from './styles/PerfilContainer.style'

const PerfilContainer = () => {
  return (
    <Container>
      <SectionProfileInfo id="section-informacoes-perfil">
        <ContainerImage>
          <ProfileImg src="../../../public/profile-image.png" alt="profile image" />
          <ContainerInfos>
            <Title>Augusto Zeni</Title>
            <Row>
              <StarIcon width="18px" height="18px" />
              <InfoLabel>4.6(123)</InfoLabel>
            </Row>
            <Row>
              <WorkIcon width="18px" height="18px" />
              <InfoLabel>Encanador</InfoLabel>
            </Row>
            <Row>
              <LocationIcon width="18px" height="18px" />
              <InfoLabel>Lajeado - RS</InfoLabel>
            </Row>
          </ContainerInfos>
        </ContainerImage>
        <ContainerContact>
          <Button id="entre-em-contato">
            <CellphoneIcon width="18px" height="18px" />
            <InfoLabel>Entre em Contato</InfoLabel>
          </Button>
          <Button id="agende-um-horario">
            <CalendarIcon width="18px" height="18px" />
            <InfoLabel>Agende um horário</InfoLabel>
          </Button>
        </ContainerContact>
      </SectionProfileInfo>

      <AboutSection id="section-sobre">
        <Title>Sobre</Title>
      </AboutSection>
    </Container>
  )
}

export default PerfilContainer
