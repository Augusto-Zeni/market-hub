import PropTypes from 'prop-types'
import {
  ActionButton,
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
  Title,
  WhitoutImage,
} from './styles/ServiceCard.style'

const HotelCard = ({ cardInfos, hasBoxShadow = true }) => {
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
}

export default HotelCard
