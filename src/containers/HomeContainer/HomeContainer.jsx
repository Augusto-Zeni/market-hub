import { getFeedHome } from '@/api/get-feed-home'
import SearchIcon from '@/assets/icons/SearchIcon/SearchIcon'
import Button from '@/components/Button/Button'
import InputIcon from '@/components/InputIcon/InputIcon'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import TitleWithLine from '@/components/TitleWithLine/TitleWithLine'
import { useQuery } from '@tanstack/react-query'
import map from 'lodash/map'
import {
  BannerContainer,
  ButtonContainer,
  CardsContainer,
  Container,
  FormSearch,
  Line,
  SubtitleBanner,
  TitleBanner,
} from './styles/HomeContainer.style'

const HomeContainer = () => {
  const { data: result } = useQuery({
    queryKey: ['feed-home'],
    queryFn: () => getFeedHome(),
  })

  console.log(result?.data)

  return (
    <Container>
      <BannerContainer>
        <TitleBanner>
          A <SubtitleBanner>solução ideal</SubtitleBanner> para você, em apenas alguns cliques
        </TitleBanner>
        <FormSearch>
          <InputIcon
            id="header-serch"
            type="text"
            placeholder="Buscando por um serviço?"
            icon={SearchIcon}
            iconSize={25}
            fill="#44BB01"
            borderRadius={15}
            borderColor="#44BB01"
            borderColorHover="#44BB01"
            shadowColor="#44bb0142"
            style={{ marginLeft: '1rem', width: '20rem', height: '3.12rem', padding: 5, background: '#fff' }}
          />
          <Button id="cadastrar-button" text="Pesquisar" style={{ width: '8rem' }} />
        </FormSearch>
      </BannerContainer>

      <TitleWithLine title="Serviços adicionados recentemente" styleContainer={{ padding: '3rem 1rem 2rem 1rem' }} />

      <CardsContainer>
        {map(result?.data, service => (
          <ServiceCard
            key={service?.id}
            cardInfos={{
              id: service?.id,
              raiting: service?.stars?.average_stars,
              serviceName: service?.description,
              location: service?.profile?.location,
              price: service?.price_per_hour,
              img: service?.image_url
            }}
          />
        ))}
      </CardsContainer>
      <ButtonContainer>
        <Line />
        <Button id="mostrar-mais-services" text="Mostrar Mais" style={{ width: '8rem', margin: '0 1rem' }} />
        <Line />
      </ButtonContainer>
    </Container>
  )
}

export default HomeContainer
