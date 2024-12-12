import { deleteService } from '@/api/delete-service'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import {
  ActionButton,
  ActionsBadge,
  CardContainer,
  CardWrapper,
  ContentContainer,
  ContentWrapper,
  Image,
  ImageContainer,
  InfoContainer,
  Location,
  Price,
  RatingBadge,
  RatingText,
  StyledArrowUpRight,
  StyledMapPin,
  StyledStar,
  StyledTrash,
  Title,
  WhitoutImage,
} from './styles/ServiceCard.style'

const HotelCard = ({ cardInfos, hasBoxShadow = true, getServices = () => {} }) => {
  const location = useLocation()

  const isMyProfile = useMemo(() => location.pathname === '/my-profile', [location])

  const handleClickDeleteService = async () => {
    try {
      await deleteService({ id: cardInfos?.id })

      getServices()

      toast.success("Serviço excluído com sucesso.")
    } catch {
      toast.error("Ops! Algo de errado aconteceu, tente novamente.")
    }
  }

  return (
    <CardWrapper>
      <CardContainer $hasBoxShadow={hasBoxShadow}>
        <ImageContainer>
          {cardInfos.img ? (
            <Image src={cardInfos.img} alt="service-image" />
          ) : (
            <WhitoutImage />
          )}
          {cardInfos.raiting && (
            <RatingBadge>
              <StyledStar />
              <RatingText>{cardInfos.raiting === 0 ? '-' : cardInfos.raiting}</RatingText>
            </RatingBadge>
          )}
          {isMyProfile && (
            <ActionsBadge onClick={handleClickDeleteService}>
              <StyledTrash />
            </ActionsBadge>
          )}
        </ImageContainer>

        <ContentContainer>
          <ContentWrapper>
            <InfoContainer>
              <Title>{cardInfos.serviceName}</Title>
              {cardInfos.location && (
                <Location>
                  <StyledMapPin />
                  <span>{cardInfos.location}</span>
                </Location>
              )}
              <Price>
                {cardInfos.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })} / h
              </Price>
            </InfoContainer>

            <ActionButton>
              <StyledArrowUpRight />
            </ActionButton>
          </ContentWrapper>
        </ContentContainer>
      </CardContainer>
    </CardWrapper>
  )
}

HotelCard.propTypes = {
  cardInfos: PropTypes.object,
  hasBoxShadow: PropTypes.bool,
  getServices: PropTypes.func,
}

export default HotelCard
