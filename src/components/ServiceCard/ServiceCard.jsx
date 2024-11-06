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
} from './styles/ServiceCard.style'

const HotelCard = ({ cardInfos }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <ImageContainer>
          <Image src={cardInfos.img} alt="service-image" />
          <RatingBadge>
            <StyledStar />
            <RatingText>{cardInfos.raiting}</RatingText>
          </RatingBadge>
        </ImageContainer>

        <ContentContainer>
          <ContentWrapper>
            <InfoContainer>
              <Title>{cardInfos.serviceName}</Title>
              <Location>
                <StyledMapPin />
                <span>{cardInfos.location}</span>
              </Location>
              <Price>{cardInfos.price}</Price>
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
}

export default HotelCard
