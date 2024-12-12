import { updateProfile } from '@/api/update-profile'
import Avaliacoes from '@/components/Avaliacoes/Avaliacoes'
import Comentario from '@/components/Comentario/Comentario'
import Input from '@/components/Input/Input'
import { InputPhone } from '@/components/InputPhone/InputPhone'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import TitleWithLine from '@/components/TitleWithLine/TitleWithLine'
import { formatarTelefone } from '@/utils/formatPhone'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import PropTypes from 'prop-types'
import { useCallback, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  AvaliacoesContainer,
  CarouselContainer,
  ComentariosContainer,
  ContactContainer,
  Container,
  ContainerEdit,
  ContainerImgProfile,
  ContainerPencilIcon,
  CoverImg,
  FooterProfileSideBar,
  InfosProfile,
  ProfileImg,
  ProfileSideBar,
  ProfilMain,
  SobreConteiner,
  StyledBriefcaseBusiness,
  StyledCheck,
  StyledClose,
  StyledMapPin,
  StyledPencil,
  StyledStar,
  TelefonesContainer,
  TextInfo,
  TextInfoContatos,
  TextSobre,
  TitleContatos,
  TitleName,
  WithoutComments,
  WithoutLabel,
  WithoutServices,
} from './styles/PerfilContainer.style'

const PerfilContainer = ({ profile, services, stars, reviews }) => {
  const location = useLocation()

  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [email, setEmail] = useState(profile?.email)
  const [isEditingPhone, setIsEditingPhone] = useState(false)
  const [phone, setPhone] = useState(profile?.phone)

  const isMyProfile = useMemo(() => location.pathname === '/my-profile', [location])

  const handleClickEditEmail = () => {
    setIsEditingEmail((prev) => !prev)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleCloseEmail = () => {
    setPhone(profile?.email)
    setIsEditingEmail(false)
  }

  const handleClickEditPhone = () => {
    setIsEditingPhone((prev) => !prev)
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleCloseProfile = () => {
    setPhone(profile?.phone)
    setIsEditingPhone(false)
  }

  const handleUpdateProfile = useCallback(async () => {
    try {
      const response = await updateProfile({
        id: profile?.id,
        job: profile?.job_role,
        name: profile?.name,
        email,
        zipcode: profile?.zipcode,
        about: profile?.about,
        phone: phone?.replace(/\D/g, '')
      })

      setPhone(response?.phone)
      setEmail(response?.email)

      toast.success('Perfil atualizado com sucesso.')
    } catch {
      setPhone(profile?.phone)
      setEmail(profile?.email)
      toast.error('Ops! Algo de errado aconteceu, tente novamente.')
    } finally {
      setIsEditingEmail(false)
      setIsEditingPhone(false)
    }
  }, [email, setIsEditingEmail, setEmail, phone, setIsEditingPhone,setPhone, profile])

  return (
    <Container>
      <ProfileSideBar>
        <CoverImg />

        <ContainerImgProfile>
          <ProfileImg src="../../../profile-image.png" />
        </ContainerImgProfile>

        <FooterProfileSideBar>
          <TitleName>{profile?.name}</TitleName>

          <InfosProfile>
            <StyledBriefcaseBusiness />
            <TextInfo>{profile?.job_role}</TextInfo>
          </InfosProfile>

          <InfosProfile>
            <StyledMapPin />
            <TextInfo>{profile?.location}</TextInfo>
          </InfosProfile>

          <InfosProfile>
            <StyledStar />
            <TextInfo>
              {stars?.average_stars}({stars?.count_1_stars + stars?.count_2_stars + stars?.count_3_stars + stars?.count_4_stars + stars?.count_5_stars})
            </TextInfo>
          </InfosProfile>

          <ContactContainer>
            <div>
              <TitleContatos>EMAIL:</TitleContatos>
              {isMyProfile ? (
                <>
                  <ContainerEdit>
                    {!isEditingEmail ? (
                      <>
                        <TextInfoContatos>{email || profile?.email}</TextInfoContatos>
                        <ContainerPencilIcon onClick={handleClickEditEmail}>
                          <StyledPencil />
                        </ContainerPencilIcon>
                      </>
                    ) : (
                      <>
                        <Input
                          name="email"
                          id="email-edit-profile"
                          type="email"
                          placeholder="Email"
                          borderColor="#44BB01"
                          borderColorHover="#44BB01"
                          shadowColor="#44bb0142"
                          style={{ margin: '1rem 0', height: 40, padding: 5 }}   
                          borderRadius={15}
                          value={email}
                          onChange={handleChangeEmail}
                        />
                        <ContainerPencilIcon onClick={handleCloseEmail}>
                          <StyledClose />
                        </ContainerPencilIcon>
                        <ContainerPencilIcon onClick={handleUpdateProfile}>
                          <StyledCheck />
                        </ContainerPencilIcon>
                      </>
                    )}
                  </ContainerEdit>
                </>
              ) : (
                <TextInfoContatos>{profile?.email}</TextInfoContatos>
              )}
            </div>

            <TelefonesContainer>
              <TitleContatos>TELEFONE:</TitleContatos>

              {isMyProfile ? (
                <ContainerEdit>
                  {!isEditingPhone ? (
                    <>
                      <TextInfoContatos>
                        {phone || profile?.phone ? formatarTelefone(phone || profile?.phone) : '-'}
                      </TextInfoContatos>
                      <ContainerPencilIcon onClick={handleClickEditPhone}>
                        <StyledPencil />
                      </ContainerPencilIcon>
                    </>
                  ) : (
                    <>
                      <InputPhone
                        name="phone"
                        id="phone-edit-profile"
                        type="text"
                        placeholder="Telefone"
                        borderColor="#44BB01"
                        borderColorHover="#44BB01"
                        shadowColor="#44bb0142"
                        style={{ margin: '1rem 0', height: 40, padding: 5 }}   
                        borderRadius={15}
                        value={phone}
                        onChange={handleChangePhone}
                      />
                      <ContainerPencilIcon onClick={handleCloseProfile}>
                        <StyledClose />
                      </ContainerPencilIcon>
                      <ContainerPencilIcon onClick={handleUpdateProfile}>
                        <StyledCheck />
                      </ContainerPencilIcon>
                    </>
                  )}
                </ContainerEdit>
              ) : (
                <TextInfoContatos>{profile?.phone ? formatarTelefone(profile?.phone) : '-'}</TextInfoContatos>
              )}
            </TelefonesContainer>
          </ContactContainer>
        </FooterProfileSideBar>
      </ProfileSideBar>

      <ProfilMain>
        <TitleWithLine title="Serviços" fontSize="1.5rem" styleContainer={{ padding: '1rem' }} />

        <CarouselContainer>
          <Swiper slidesPerView={2} spaceBetween={10}>
            {!isEmpty(services) ? (
              <>
                {map(services, service => (
                  <SwiperSlide key={service?.id}>
                    <ServiceCard
                      cardInfos={{
                        id: service?.id,
                        serviceName: service?.description,
                        price: service?.price_per_hour,
                        img: service?.image_url
                      }}
                      hasBoxShadow={false}
                  />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <WithoutServices>
                <WithoutLabel>
                  Esse perfil ainda não tem serviços
                </WithoutLabel>
              </WithoutServices>
            )}
          </Swiper>
        </CarouselContainer>

        <TitleWithLine title="Sobre" fontSize="1rem" styleContainer={{ padding: '1rem' }} />
        <SobreConteiner>
          <TextSobre>
            {profile?.about}
          </TextSobre>
        </SobreConteiner>

        <TitleWithLine title="Avaliações" fontSize="1rem" styleContainer={{ padding: '1rem' }} />
        <AvaliacoesContainer>
          <Avaliacoes
            avarage={stars?.average_stars}
            qtdTotal={stars?.count_1_stars + stars?.count_2_stars + stars?.count_3_stars + stars?.count_4_stars + stars?.count_5_stars}
            umaEstrelaQtd={stars?.count_1_stars}
            duasEstrelaQtd={stars?.count_2_stars}
            tresEstrelaQtd={stars?.count_3_stars}
            quatroEstrelaQtd={stars?.count_4_stars}
            cincoEstrelaQtd={stars?.count_5_stars}
          />
        </AvaliacoesContainer>

        <ComentariosContainer>
          {!isEmpty(reviews) ? (
            <>
              {map(reviews, reviews => (
                <Comentario
                  key={reviews?.id}
                  nome={reviews?.nome}
                  avaliacao={reviews?.stars}
                  comentario={reviews?.review}
                />
              ))}
            </>
          ) : (
            <WithoutComments>
              <WithoutLabel>
                Esse perfil ainda não recebeu um comentário
              </WithoutLabel>
            </WithoutComments>
          )}
        </ComentariosContainer>
      </ProfilMain>
    </Container>
  )
}

PerfilContainer.propTypes = {
  profile: PropTypes.object,
  services: PropTypes.array,
  stars: PropTypes.object,
  reviews: PropTypes.array,
}

export default PerfilContainer
