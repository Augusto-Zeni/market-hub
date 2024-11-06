import SearchIcon from '@/assets/icons/SearchIcon/SearchIcon'
import Button from '@/components/Button/Button'
import InputIcon from '@/components/InputIcon/InputIcon'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import map from 'lodash/map'
import {
  BannerContainer,
  ButtonContainer,
  CardsContainer,
  Container,
  FormSearch,
  SubtitleBanner,
  TitleBanner,
  TitleCards,
  TitleCardsContainer,
  TitleLine,
} from './styles/HomeContainer.style'

const cardsInfos = [
  {
    id: 1,
    raiting: 3.2,
    serviceName: 'Encanador Profissional',
    location: 'Lajeado, RS',
    price: 'R$241,00',
    img: 'https://media.istockphoto.com/id/1440019701/pt/foto/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=612x612&w=0&k=20&c=S63dVuXXBdjIYacxkwS1WT504Yt8Ou6q5TiIUF5uMUw=',
  },
  {
    id: 2,
    raiting: 4.5,
    serviceName: 'Eletricista Residencial',
    location: 'Porto Alegre, RS',
    price: 'R$320,00',
    img: 'https://media.istockphoto.com/id/1049775258/pt/foto/smiling-handsome-electrician-repairing-electrical-box-with-pliers-in-corridor-and-looking-at.jpg?s=612x612&w=0&k=20&c=zoH4Td-Ange_i8h0jjNgjHw-9qfhFeXlcPg2mOUuWNw=',
  },
  {
    id: 3,
    raiting: 4.0,
    serviceName: 'Jardineiro',
    location: 'Caxias do Sul, RS',
    price: 'R$180,00',
    img: 'https://img.freepik.com/fotos-gratis/jardineiro-com-weedwacker-cortando-a-grama-no-jardim_329181-20539.jpg',
  },
  {
    id: 4,
    raiting: 3.8,
    serviceName: 'Pintor',
    location: 'Santa Maria, RS',
    price: 'R$275,00',
    img: 'https://img.freepik.com/fotos-premium/pintor-pintando-uma-parede-com-rolo-de-pintura-decoracao-de-casa-conceito-de-reparo_106035-1090.jpg',
  },
  {
    id: 5,
    raiting: 4.3,
    serviceName: 'Técnico em Informática',
    location: 'Novo Hamburgo, RS',
    price: 'R$150,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBqBhZ6UYdjKU_BQKxLXC3ku4RUHbJ1nz6w&s',
  },
  {
    id: 6,
    raiting: 4.9,
    serviceName: 'Marceneiro',
    location: 'Canoas, RS',
    price: 'R$380,00',
    img: 'https://img.freepik.com/fotos-gratis/carpinteiro-cortando-placa-de-mdf-dentro-da-oficina_23-2149451066.jpg',
  },
  {
    id: 7,
    raiting: 3.6,
    serviceName: 'Montador de Móveis',
    location: 'Gravataí, RS',
    price: 'R$200,00',
    img: 'https://img.freepik.com/fotos-gratis/trabalhador-de-montagem-de-moveis-em-pe-lendo-as-instrucoes-e-usando-uma-fita-metrica-ferramentas-de-trabalho_482257-24849.jpg',
  },
  {
    id: 8,
    raiting: 4.8,
    serviceName: 'Dedetizador',
    location: 'Pelotas, RS',
    price: 'R$310,00',
    img: 'https://img.freepik.com/fotos-gratis/pessoas-desinfetando-uma-area-de-risco-biologico_23-2148848550.jpg',
  },
  {
    id: 9,
    raiting: 4.2,
    serviceName: 'Cuidador de Idosos',
    location: 'Passo Fundo, RS',
    price: 'R$420,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBz8VEC1ovqstOwMG2BmgLkpeSK9JG-aLcw&s',
  },
  {
    id: 10,
    raiting: 3.9,
    serviceName: 'Limpeza Pós-Obra',
    location: 'Erechim, RS',
    price: 'R$290,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJm63hIVBxFzrdwoXxKzZXU79pIH1RqPCiQ&s',
  },
  {
    id: 11,
    raiting: 4.7,
    serviceName: 'Mecânico Automotivo',
    location: 'São Leopoldo, RS',
    price: 'R$350,00',
    img: 'https://img.freepik.com/fotos-gratis/trabalhador-de-servico-de-carro-muscular-reparando-o-veiculo_146671-19605.jpg',
  },
  {
    id: 12,
    raiting: 4.1,
    serviceName: 'Personal Organizer',
    location: 'Viamão, RS',
    price: 'R$230,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjwnGjtU4_4P5i5vGcrRccI8I3bKj3hbBpA&s',
  },
  {
    id: 13,
    raiting: 4.4,
    serviceName: 'Faxineira',
    location: 'Bagé, RS',
    price: 'R$150,00',
    img: 'https://st2.depositphotos.com/2249091/10404/i/450/depositphotos_104040938-stock-photo-nothing-is-better-than-team.jpg',
  },
  {
    id: 14,
    raiting: 3.7,
    serviceName: 'Babá',
    location: 'Alvorada, RS',
    price: 'R$300,00',
    img: 'https://media.istockphoto.com/id/1028379220/pt/foto/mom-and-kid-girl-drawing-with-colored-pencils-at-home.jpg?s=612x612&w=0&k=20&c=DZ21athKVhmY3ENTIGRHaJqg9J67Zq1kLQ_LyPCBY-Y=',
  },
  {
    id: 15,
    raiting: 4.6,
    serviceName: 'Professor Particular de Matemática',
    location: 'Torres, RS',
    price: 'R$100,00',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdG3efwvVznWSZ2f5d1bTdHYRpnzephJj73Q&s',
  },
]

const HomeContainer = () => {
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

      <TitleCardsContainer>
        <TitleCards>Serviços adicionados recentemente</TitleCards>
        <TitleLine />
      </TitleCardsContainer>

      <CardsContainer>
        {map(cardsInfos, info => (
          <ServiceCard key={info.id} cardInfos={info} />
        ))}
      </CardsContainer>
      <ButtonContainer>
        <Button id="mostrar-mais-services" text="Mostrar Mais" style={{ width: '8rem' }} />
      </ButtonContainer>
    </Container>
  )
}

export default HomeContainer
