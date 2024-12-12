import { BriefcaseBusiness, Check, MapPin, Pencil, Star, X } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 90vw;
  margin: 6rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 384px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`

export const ProfileSideBar = styled.aside`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0px 20px #9090906b;
`

export const CoverImg = styled.div`
  background-color: #003912;
  width: 100%;
  height: 10rem;
  object-fit: cover;
`

export const ContainerImgProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 5rem);
`

export const ProfileImg = styled.img`
  box-sizing: initial;
  width: 10rem;
  height: 10rem;
  border-radius: 80px;
  outline: 2px solid #44bb01;
  box-shadow: 0 0px 20px #9090906b;
`

export const FooterProfileSideBar = styled.footer`
  padding: 1.5rem 2rem 2rem;
  line-height: 1.7;
`

export const TitleName = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`

export const InfosProfile = styled.div`
  display: flex;
  align-items: center;
`

export const TextInfo = styled.span`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 0.2rem;
`

export const StyledStar = styled(Star)`
  width: 1rem;
  height: 1rem;
  color: #fbbf24;
  fill: #fbbf24;
`

export const StyledBriefcaseBusiness = styled(BriefcaseBusiness)`
  width: 1rem;
  height: 1rem;
  color: #dadadd;
  fill: #dadadd;
`

export const StyledMapPin = styled(MapPin)`
  width: 1rem;
  height: 1rem;
  color: #dadadd;
`

export const ContactContainer = styled.div`
  border-block: 1px solid #dadadd;
  margin: 2rem 0 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TitleContatos = styled.h2`
  font-size: 0.9rem;
  color: #44bb01;
  font-weight: 400;
`

export const TextInfoContatos = styled.span`
  font-size: 0.75rem;
  font-weight: 300;
`

export const TelefonesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfilMain = styled.main`
  border-radius: 8px;
  box-shadow: 0 0px 20px #9090906b;
  padding: 1rem;
  overflow: hidden;
`

export const CarouselContainer = styled.div`
  height: 20rem;
`

export const SobreConteiner = styled.div`
  padding: 0 1rem 1rem;
`

export const TextSobre = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.4;
`

export const AvaliacoesContainer = styled.div`
  padding: 0 1rem 1rem;
`

export const ComentariosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

export const WithoutServices = styled.div`
  height: 20rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ContainerEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerPencilIcon = styled.div`
  border-radius: 9999999px;
  display: flex;
  padding: .35rem;
  cursor: pointer;

  &:hover {
    background: #e4e4e4;
  }
`

export const StyledPencil = styled(Pencil)`
  width: 1rem;
  height: 1rem;
  color: #44bb01;
`

export const StyledCheck = styled(Check)`
  width: 1rem;
  height: 1rem;
  color: #44bb01;
`

export const StyledClose = styled(X)`
  width: 1rem;
  height: 1rem;
  color: #44bb01;
`
